import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import PageContext from '../../components/PageContext/PageContext';
import './Home.css';

function Home() {

    const usePageContext = useContext(PageContext);
    let appPrefix = usePageContext.app_prefix;

    let linkStyle = {
        color: 'white'
    };

    // Note: use the app id from your Portlet Manifest 'macro-portal--team-name-app-name'

    return (
        <>
        <section data-app-prefix={usePageContext.app_prefix} className="app">
            <h1 className="text">Z-APP</h1>
            <p className="manifest">
                id: {usePageContext.id} <br/>
                name: {usePageContext.name} <br/>
                app_prefix: {usePageContext.app_prefix} <br/>
                description: {usePageContext.description} <br/>
                version: {usePageContext.version} <br/>
                team: {usePageContext.team} <br/>
                entry_script: {usePageContext.entry_script} <br/>
                image_path: {usePageContext.image_path} <br/>
                css_path: {usePageContext.css_path} <br/>
                iframe: {usePageContext.entry_iframe} <br/>
                email_contacts: {usePageContext.email_contacts} <br/>
                environment: {usePageContext.environment} <br/>
                rootRenderNode: {usePageContext.rootRenderNode} <br/>
                ssri: {usePageContext.ssri} <br/>
                resource: {usePageContext.resource} <br/>
                region: {usePageContext.region} <br/>
            </p>
        </section>
        <div style={{
            textAlign: 'center',
            position: 'absolute',
            zIndex: 4,
            top: 80,
            left: 80
        }}>
            <ul style={{
                textAlign: 'left'
            }}>
                <li>
                    <Link to={'/'} style={linkStyle}>Home</Link>
                </li>
                <li>
                    <Link to={appPrefix + '/datatable'} style={linkStyle}>Datatable</Link>
                </li>
                <li>
                    <Link to={appPrefix + '/forms'} style={linkStyle}>Forms</Link>
                </li>
                <li>
                    <Link to={appPrefix +'/todo'} style={linkStyle}>Todo App</Link>
                </li>
                <li>
                    <Link to={appPrefix +'/settings'} style={linkStyle}>Settings</Link>
                </li>
                <li>
                    <Link to={appPrefix +'/stepper'} style={linkStyle}>Stepper</Link>
                </li>
                <li>
                    <Link to={appPrefix +'/no-route'} style={linkStyle}>Not Found</Link>
                </li>
            </ul>
        </div>
        </>
    );
}

export default Home;