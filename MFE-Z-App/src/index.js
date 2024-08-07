import {React, useCallback} from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import PubSub from './utils/pubsub.js';
import getCssString from './utils/getCssString.js';
import MICRO_FRONTEND_MANIFEST from './micro-frontend-manifest';
import shadow from 'react-shadow';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

const surveyJson = {
    elements: [{
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    }, {
      name: "LastName",
      title: "Enter your last name:",
      type: "text"
    }]
  };

function ClaimsForm() {
    const survey = new Model(surveyJson);
    const alertResults = useCallback((sender) => {
        const results = JSON.stringify(sender.data);
        alert(results);
        // saveSurveyResults(
        //   "https://your-web-service.com/" + SURVEY_ID,
        //   sender.data
        // )
    }, []);

    survey.onComplete.add(alertResults);

    return <Survey model={survey} />;
}

PubSub.subscribe('module_loaded', function (msg, data) {
    let cssPath = "/bundles/Z-App-132pqds-05c/static/css/mfe.css";
    if (data.rootRenderNode) {
        cssPath = data.css_path;
    }
    getCssString(cssPath).then((surveyCss) => {
        let rootRenderNode = "root";
        if (data.rootRenderNode) {
            rootRenderNode = data.rootRenderNode;
        }
        const rootNode = createRoot(document.getElementById(rootRenderNode));
        rootNode.render(
            <shadow.div className="shadow">
                <ClaimsForm/>
                <App 
                    {...data}
                />
                <style type="text/css">{surveyCss}</style>
            </shadow.div>
        );
    });
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
