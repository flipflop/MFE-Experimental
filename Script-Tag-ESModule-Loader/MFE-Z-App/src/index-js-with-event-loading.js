import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PubSub from './utils/pubsub.js';
import MICRO_FRONTEND_MANIFEST from './micro-frontend-manifest';

PubSub.subscribe('module_loaded', function (msg, data) {

  ReactDOM.render(
    <React.StrictMode>
      <App 
          {...data}
      />
      </React.StrictMode>,
      document.getElementById('root')
  );
});

if (process.env.NODE_ENV === 'development') {
  /*
  * For local development the manifest is locally created and loaded
  * in production the manifest is provided to a centralised registry
  * The Host Micro Frontend Platfrom provides a module load event with
  * the manifest data, including the application prefix which is derived
  * from the manually namespaced application name from create-mfe-manifest.js
  */

  PubSub.publish('module_loaded', MICRO_FRONTEND_MANIFEST);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();