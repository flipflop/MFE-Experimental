import React from "react";
import { Base64Images } from "./utils/base-64-images"; 

function App(props) {
  return (
    <section className="manifest-details" data-app-prefix={props.app_prefix} className="app">
        <h1 className="text">Z-APP</h1>
        <img className="App-logo" alt="logo" src={Base64Images.getLogo()} />
        <p className="manifest">
            id: {props.id} <br/>
            name: {props.name} <br/>
            app_prefix: {props.app_prefix} <br/>
            description: {props.description} <br/>
            version: {props.version} <br/>
            team: {props.team} <br/>
            entry_script: {props.entry_script} <br/>
            image_path: {props.image_path} <br/>
            css_path: {props.css_path} <br/>
            iframe: {props.entry_iframe} <br/>
            email_contacts: {props.email_contacts} <br/>
            environment: {props.environment} <br/>
            rootRenderNode: {props.rootRenderNode} <br/>
            ssri: {props.ssri} <br/>
            resource: {props.resource} <br/>
            region: {props.region} <br/>
        </p>
    </section>
  );
}

export default App;