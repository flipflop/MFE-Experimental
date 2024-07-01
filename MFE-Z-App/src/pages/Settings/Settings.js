import React from 'react';
import { Link } from "react-router-dom";

function Settings() {
    return (
        <div style={{
            textAlign: 'center'
        }}>
            <h1>Settings</h1>

            <Link to='/' style={{
                color: 'white',
                display: 'block',
                marginTop: '20px'
            }}>Take me back...</Link>
        </div>
    );
}

export default Settings;