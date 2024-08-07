import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MICRO_FRONTEND_MANIFEST from './micro-frontend-manifest';
import ReactShadowRoot from 'react-shadow-root';

let cssStyles = `
  .app {
    font-family: 'Arial';
    font-size: 22px;
  }

  .app .App-logo {
      height: 40vmin;
      pointer-events: none;
    }

    @media (prefers-reduced-motion: no-preference) {
      [data-app-prefix='13u3gis-05c'] .App-logo {
        animation: App-logo-spin infinite 20s linear;
      }
    }

    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

  .app {
      background: #333;
      color: #999;
      font: Arial;
      padding: 1.5em;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-ittems: center;
      justify-content: center;
      color: #777;
    }
`;

ReactDOM.render(
  <React.StrictMode>
    <ReactShadowRoot>
      <style>{cssStyles}</style>
      <App {...MICRO_FRONTEND_MANIFEST} />
    </ReactShadowRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
