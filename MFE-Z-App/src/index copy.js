import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import theme from './theme';
import PubSub from './utils/pubsub.js';
import MICRO_FRONTEND_MANIFEST from './micro-frontend-manifest';
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const container = document.querySelector('#root');
const shadowContainer = container.attachShadow({ mode: 'open' });
const shadowRootElement = document.createElement('div');    
shadowContainer.appendChild(shadowRootElement);

const cache = createCache({
  key: 'css',
  prepend: true,
  container: shadowContainer,
});

PubSub.subscribe('module_loaded', function (msg, data) {
    createRoot(shadowRootElement).render(
        <CacheProvider value={cache}>
            <App 
                theme={theme} 
                {...data}
            />
        </CacheProvider>
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
