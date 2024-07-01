import React from 'react';
import { Link } from "react-router-dom";
import {
    Button,
    Grid,
  } from "@material-ui/core";

import Typography from '@material-ui/core/Typography';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
 
class Forms extends React.Component {
 
    state = {
        user: {
            password: '',
            repeatPassword: '',
        },
    };
 
    componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.user.password) {
                return false;
            }
            return true;
        });
    }
 
    componentWillUnmount() {
        // remove rule when it is not needed
        ValidatorForm.removeValidationRule('isPasswordMatch');
    }
 
    handleChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }
 
    handleSubmit = () => {
        // your submit logic
    }
 
    render() {
        const { user } = this.state;
 
        return (
            <>
             <Typography variant="h6" style={{
                 textTransform: 'capitalize'
             }}>
                Confirm your password
            </Typography>
            <Grid item xs={8} sm={4}>
                <ValidatorForm
                    onSubmit={this.handleSubmit}
                >
                    <TextValidator
                        fullWidth
                        label="Password"
                        onChange={this.handleChange}
                        name="password"
                        type="password"
                        validators={['required']}
                        errorMessages={['this field is required']}
                        value={user.password}
                        margin="normal"
                        variant="outlined"
                    />
                    <br />
                    <TextValidator
                        fullWidth
                        label="Repeat password"
                        onChange={this.handleChange}
                        name="repeatPassword"
                        type="password"
                        validators={['isPasswordMatch', 'required']}
                        errorMessages={['password mismatch', 'this field is required']}
                        value={user.repeatPassword}
                        margin="normal"
                        variant="outlined"
                    />
                    <br />
                    <br />
                    <Button color="primary" variant="contained" type="submit">Submit</Button>
                </ValidatorForm>
            </Grid>

            <Link to='/' style={{
                color: 'white',
                display: 'block',
                marginTop: '20px'
            }}>Take me back...</Link>
            </>
        );
    }
}

export default Forms;