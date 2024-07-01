import React from 'react';
import StepWizard from '../../components/StepWizard/StepWizard';
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

function Stepper() {
    return (
        <div style={{
            textAlign: 'center'
        }}>
            <h1>Stepper</h1>

            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
            <StepWizard />
            </Grid>
            <Link to='/' style={{
                color: 'white',
                display: 'block',
                marginTop: '20px'
            }}>Take me back...</Link>
        </div>
    );
}

export default Stepper;