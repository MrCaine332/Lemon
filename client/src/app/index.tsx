import React from 'react';
import ReactDOM from 'react-dom/client';

import "@assets/fonts/fonts.css"
import "@styles/globals.scss"

import App from "@app/App";
import AppProviders from "@app/providers/AppProviders";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <AppProviders>
          <App/>
      </AppProviders>
  </React.StrictMode>
);
