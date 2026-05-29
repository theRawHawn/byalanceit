import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export async function render(url) {
  // SSR disabled for dashboard, admin, or authenticated routes
  if (url.startsWith('/dashboard') || url.startsWith('/admin') || url.startsWith('/auth')) {
    return { html: '', ssrDisabled: true };
  }

  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

  return { html, ssrDisabled: false };
}
