import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        fontSize: 22,
        textTransform: 'uppercase',
        padding: '0 20px 0 20px'
    },
    spacer: {
        flexGrow: 1,
    }
  }));

const appBarStyles = {
    color: '#2167AE',
    fontWeight: 'bold',
    background: '#111',
    marginBottom: '40px'
};
  
export default function Header(props) {
    const classes = useStyles();
 
    function ResponsiveTitle() {
        const matches = useMediaQuery('(min-width:600px)');
        let imageHeight = '45px';

        if (matches) {
            imageHeight = '45px';
        } else {
            imageHeight = '35px';
        }

        return (
            <>
                <a href="/">
                    <img src="https://www.zurich.com.au/content/experience-fragments/zurich-delta/au/en/site/header/master/_jcr_content/root/image_129313204.coreimg.svg/1632965902010/zurich-logo-small-new.svg" style={{
                        position: 'relative',
                        top: '-1px'
                    }} height={imageHeight} alt="App logo" />
                </a>
                <div style={{
                    background: "#2167AE",
                    width: '2px',
                    height: '40px',
                    marginLeft: '15px'
                }}></div>
                <span style={{
                    fontSize: 22,
                    textTransform: 'uppercase',
                    padding: '0 20px 0 20px'
                }}>
                    {props.appName}
                </span>
            </>
        );
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" style={appBarStyles}>
                <Toolbar>
                    <ResponsiveTitle />
                    <span className={classes.spacer}></span>
                    {props.children}
                </Toolbar>
            </AppBar>
        </div>
    );
}