import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  return {
    plugins: [
      react(),
      tailwindcss(),
      vike({
        prerender: true,
      }),
      {
        name: 'api-contact-middleware',
        configureServer(server) {
          server.middlewares.use('/api/contact', (req, res, next) => {
            if (req.method === 'POST') {
              try {
                let body = '';
                req.on('data', chunk => {
                  body += chunk;
                });
                req.on('end', async () => {
                  try {
                    const fullUrl = `http://${req.headers.host || 'localhost'}${req.url}`;
                    const standardRequest = new Request(fullUrl, {
                      method: 'POST',
                      headers: req.headers as HeadersInit,
                      body: body,
                    });

                    const env = {
                      GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL || '',
                      GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY || '',
                      GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID || '',
                    };

                    const { onRequestPost } = await import('./api/contact.js');
                    const webResponse = await onRequestPost({ request: standardRequest, env });

                    res.statusCode = webResponse.status;
                    webResponse.headers.forEach((value, key) => {
                      res.setHeader(key, value);
                    });
                    const resBody = await webResponse.text();
                    res.end(resBody);
                  } catch (innerErr: any) {
                    console.error('[Byalance Dev Server API] Error inside /api/contact handler:', innerErr);
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ 
                      message: 'Internal error executing /api/contact logic.', 
                      error: innerErr.message,
                    }));
                  }
                });
              } catch (err: any) {
                console.error('[Byalance Dev Server API] Error reading request body:', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ message: 'Internal error reading request body.', error: err.message }));
              }
            } else {
              next();
            }
          });
        }
      },

      isBuild && ViteImageOptimizer({
        png: { quality: 85 },
        jpeg: { quality: 80 },
        jpg: { quality: 80 },
        webp: { lossless: false, quality: 80 },
        svg: {
          plugins: [
            { name: 'removeViewBox' },
          ],
        },
      }),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (
                id.includes('react') ||
                id.includes('react-dom') ||
                id.includes('react-router') ||
                id.includes('react-helmet-async')
              ) {
                return 'vendor-core';
              }
              if (id.includes('motion') || id.includes('lucide-react')) {
                return 'vendor-ui';
              }
              return 'vendor-libs';
            }
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
