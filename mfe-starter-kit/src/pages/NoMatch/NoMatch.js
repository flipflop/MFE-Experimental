import React from 'react';
import { Link } from "react-router-dom";
import notFoundPage from './404-page.png'; 

function NoMatch({children}) {

    return (
        <div style={{
            textAlign: 'center'
        }}>

            <img 
                src={notFoundPage}
                width="400px" 
                alt="Page Not Found"
                style={{
                    filter: 'grayscale(1)'
                }} 
            />
            <br />
            <h1 style={{
                fontSize: '42px',
                font: 'normal 40px/2.50rem "VT323", monospace',
                fontWeight: '700',
                textTransform: 'uppercase',
                background: '#444',
                display: 'inline-block',
                padding: '5px 10px 5px 10px'
            }}>Page Not Found</h1>

            <p style={{
                font: 'normal 30px/1.75rem "VT323", monospace'
            }}>
                An error has occured, to continue
            </p>
            <Link to='/' style={{
                font: 'normal 30px/1.75rem "VT323", monospace',
                color: 'white',
                display: 'block',
                marginTop: '20px'
            }}>Take me back...</Link>

            {children}
        </div>
    );
}

export default NoMatch;