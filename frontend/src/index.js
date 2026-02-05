import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

async function loadConfig() {
  try {
    const resp = await fetch('/api/config');
    if (resp.ok) {
      const json = await resp.json();
      window.__APP_CONFIG__ = json || {};
      return;
    }
  } catch (error) {
    alert("Error loading config: " + error.message);
  }
  window.__APP_CONFIG__ = {};
}

async function start() {
  await loadConfig();
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
  reportWebVitals();
}

start();
