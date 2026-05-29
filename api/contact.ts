import { google } from 'googleapis';

export async function onRequestPost({ request, env }: { 
  request: Request; 
  env: { 
    GOOGLE_CLIENT_EMAIL: string; 
    GOOGLE_PRIVATE_KEY: string; 
    GOOGLE_SHEET_ID: string; 
  } 
}) {
  try {
    const body = await request.json();
    const { name, mobile, email, businessType, message } = body;

    let clientEmail = (env.GOOGLE_CLIENT_EMAIL ?? '').trim();
    let privateKey = (env.GOOGLE_PRIVATE_KEY ?? '').trim();
    let sheetId = (env.GOOGLE_SHEET_ID ?? '').trim();

    // Clean wrapping quotes that could be introduced during copy-paste
    clientEmail = clientEmail.replace(/^["']|["']$/g, '').trim();
    privateKey = privateKey.replace(/^["']|["']$/g, '').trim();
    sheetId = sheetId.replace(/^["']|["']$/g, '').trim();

    if (!clientEmail || !privateKey || !sheetId) {
      return new Response(
        JSON.stringify({ message: 'Server configuration error.' }), 
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Dynamically retrieve the first sheet name to prevent "Unable to parse range" on renamed/localized sheets
    let targetSheetName = 'Sheet1';
    try {
      const spreadsheetInfo = await sheets.spreadsheets.get({
        spreadsheetId: sheetId,
        fields: 'sheets.properties.title'
      });
      if (spreadsheetInfo.data?.sheets && spreadsheetInfo.data.sheets.length > 0 && spreadsheetInfo.data.sheets[0].properties?.title) {
        targetSheetName = spreadsheetInfo.data.sheets[0].properties.title;
      }
    } catch (metaErr: any) {
      console.warn('[Byalance] Could not retrieve spreadsheet sheet title dynamically, using fallback Sheet1:', metaErr.message);
    }

    const range = `'${targetSheetName}'`;
    const valueInputOption = 'RAW';

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const requestBody = {
      values: [[timestamp, name ?? '', mobile ?? '', email ?? '', businessType ?? '', message ?? '']],
    };

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range,
      valueInputOption,
      insertDataOption: 'OVERWRITE',
      requestBody,
    });

    return new Response(
      JSON.stringify({ message: 'Success' }), 
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('Error in /api/contact:', error);
    return new Response(
      JSON.stringify({ 
        message: 'Error submitting form.', 
        error: error.message,
        detail: error.response?.data || error 
      }), 
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
}
