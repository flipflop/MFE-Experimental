import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import PageContext from '../../components/PageContext/PageContext';

function Home() {

    const usePageContext = useContext(PageContext);
    let appPrefix = usePageContext.app_prefix;

    let linkStyle = {
        color: 'black'
    };

    // Note: use the app id from your Portlet Manifest 'macro-portal--team-name-app-name'

    return (
        <section className="home-page" data-app-prefix={usePageContext.app_prefix}>
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
            <div>
                <ul>
                    <li>
                        <Link to={'/'} style={linkStyle}>Home</Link>
                    </li>
                    <li>
                        <Link to={appPrefix +'/no-route'} style={linkStyle}>Not Found</Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Home;