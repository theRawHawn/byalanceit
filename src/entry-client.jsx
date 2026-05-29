import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const container = document.getElementById('root');

if (container && container.hasChildNodes()) {
  hydrateRoot(
    container,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else if (container) {
  import('react-dom/client').then(({ createRoot }) => {
    const root = createRoot(container);
    root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
}
