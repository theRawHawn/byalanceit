// ─── Cloudflare Pages Function: POST /api/contact ────────────────────────────
// Uses Web Crypto API directly — no npm packages, fully native to CF Workers.

// ─── CORS headers ────────────────────────────────────────────────────────────
function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function jsonResponse(status: number, body: object) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders() },
  });
}

// ─── OPTIONS preflight ────────────────────────────────────────────────────────
export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

// ─── POST handler ─────────────────────────────────────────────────────────────
export async function onRequestPost(context: any) {
  try {
    // 1. Read and validate env vars
    let clientEmail = (context.env.GOOGLE_CLIENT_EMAIL ?? '').trim();
    let privateKeyRaw = (context.env.GOOGLE_PRIVATE_KEY ?? '').trim();
    let sheetId = (context.env.GOOGLE_SHEET_ID ?? '').trim();

    // Clean wrapping quotes (single or double) that can happen during copy-pasting
    clientEmail = clientEmail.replace(/^["']|["']$/g, '').trim();
    privateKeyRaw = privateKeyRaw.replace(/^["']|["']$/g, '').trim();
    sheetId = sheetId.replace(/^["']|["']$/g, '').trim();

    if (!clientEmail || !privateKeyRaw || !sheetId) {
      return jsonResponse(500, {
        message: 'Server configuration error.',
        missing: {
          GOOGLE_CLIENT_EMAIL: !clientEmail,
          GOOGLE_PRIVATE_KEY: !privateKeyRaw,
          GOOGLE_SHEET_ID: !sheetId,
        },
      });
    }

    // 2. Parse form body
    let body: any;
    try {
      body = await context.request.json();
    } catch {
      return jsonResponse(400, { message: 'Invalid JSON in request body.' });
    }
    const { name, mobile, email, businessType, message } = body;

    // 3. Get Google OAuth2 access token (pure Web Crypto — no jose needed)
    let accessToken: string;
    try {
      accessToken = await getGoogleAccessToken(clientEmail, privateKeyRaw);
    } catch (tokenErr: any) {
      return jsonResponse(500, {
        message: 'Failed to authenticate with Google.',
        detail: tokenErr.message,
      });
    }

    // 4. Retrieve sheet name dynamically to prevent "Unable to parse range" on renamed/localized sheets
    let targetSheetName = 'Sheet1';
    try {
      const metaUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?fields=sheets.properties.title`;
      const metaRes = await fetch(metaUrl, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (metaRes.ok) {
        const metaData: any = await metaRes.json();
        if (metaData.sheets && metaData.sheets.length > 0 && metaData.sheets[0].properties?.title) {
          targetSheetName = metaData.sheets[0].properties.title;
        }
      } else {
        console.warn('[Byalance] Could not fetch spreadsheet metadata. Falling back to default name Sheet1.', await metaRes.text());
      }
    } catch (metaErr: any) {
      console.warn('[Byalance] Error fetching spreadsheet sheet title, falling back to Sheet1:', metaErr.message);
    }

    // URL-encode the range dynamically to keep URL valid if sheet name contains spaces or special characters
    const encodedRange = encodeURIComponent(`'${targetSheetName}'`);
    const sheetsUrl =
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}` +
      `/values/${encodedRange}:append?valueInputOption=RAW&insertDataOption=OVERWRITE`;

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const sheetsRes = await fetch(sheetsUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        majorDimension: 'ROWS',
        values: [[timestamp, name ?? '', mobile ?? '', email ?? '', businessType ?? '', message ?? '']],
      }),
    });

    if (!sheetsRes.ok) {
      const errText = await sheetsRes.text();
      return jsonResponse(500, { message: 'Google Sheets API error.', detail: errText });
    }

    return jsonResponse(200, { message: 'Success' });

  } catch (err: any) {
    return jsonResponse(500, { message: 'Unexpected server error.', detail: err.message });
  }
}

// ─── Build a Google OAuth2 access token via JWT Bearer flow ──────────────────
// Uses Web Crypto API (crypto.subtle) — native to CF Workers, no packages needed.
async function getGoogleAccessToken(
  clientEmail: string,
  privateKeyPem: string,
): Promise<string> {

  // Clean the PEM key:
  // Remove wrapping quotes if present and resolve escaped newlines
  let pem = privateKeyPem.trim().replace(/^["']|["']$/g, '').trim();
  pem = pem.replace(/\\n/g, '\n');

  // Strip PEM armor headers and all whitespace to get the raw base64 DER payload
  const base64Der = pem
    .replace(/-----BEGIN PRIVATE KEY-----/g, '')
    .replace(/-----END PRIVATE KEY-----/g, '')
    .replace(/-----BEGIN RSA PRIVATE KEY-----/g, '')
    .replace(/-----END RSA PRIVATE KEY-----/g, '')
    .replace(/\s+/g, '');

  // Decode base64 → binary bytes
  const keyBytes = Uint8Array.from(atob(base64Der), (c) => c.charCodeAt(0));

  // Import as PKCS#8 RSA key for RSASSA-PKCS1-v1_5 / SHA-256 (RS256)
  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    keyBytes.buffer,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign'],
  );

  const now = Math.floor(Date.now() / 1000);

  // Build JWT header + payload as base64url
  const headerB64  = toBase64Url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const payloadB64 = toBase64Url(JSON.stringify({
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  }));

  const signingInput = `${headerB64}.${payloadB64}`;

  // Sign with RS256
  const sigBytes = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    new TextEncoder().encode(signingInput),
  );

  const jwt = `${signingInput}.${bytesToBase64Url(new Uint8Array(sigBytes))}`;

  // Exchange JWT assertion for an access token
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!tokenRes.ok) {
    const errBody = await tokenRes.text();
    throw new Error(`Google token exchange failed: ${errBody}`);
  }

  const { access_token } = await (tokenRes.json() as Promise<{ access_token: string }>);
  if (!access_token) throw new Error('No access_token returned by Google.');
  return access_token;
}

// ─── base64url helpers ────────────────────────────────────────────────────────
// Encodes a UTF-8 string to base64url (handles Unicode safely via TextEncoder)
function toBase64Url(str: string): string {
  return bytesToBase64Url(new TextEncoder().encode(str));
}

// Encodes a Uint8Array to base64url
function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = '';
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
