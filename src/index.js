import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from './App';

Sentry.init({
  dsn: "https://c580e4ff1e414676b3d0a90713092b86@o676634.ingest.sentry.io/5977689",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  denyUrls:[
    /^http:\/\/localhost:/i
  ],
  debug: true,
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
