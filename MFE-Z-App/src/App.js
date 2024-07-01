import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import Header from './components/Header/Header';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import { PageContextProvider } from './components/PageContext/PageContext';
import { StylesProvider, ThemeProvider, createGenerateClassName } from '@material-ui/styles';
import Routes from './routes';

const App = (props) => {

  // ensure CSS is prefixed to mitigate style collisions with main portal
  const generateClassName = createGenerateClassName({
    productionPrefix: props.app_prefix,
    disabledGlobal: true
  })

  return (
    <PageContextProvider value={props}>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={props.theme}>
          <CssBaseline />
          <Header appName="Micro Frontend Starter Kit">
            <IconButton
                aria-label="application settings"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
            >
                <SettingsIcon />
            </IconButton>
            <Menu
              open={false}
              id="header-menu-appbar"
            >
              <MenuItem>Option 1</MenuItem>
              <MenuItem>Option 2</MenuItem>
              <MenuItem>Option 3</MenuItem>
            </Menu>
          </Header>
          <Container maxWidth="xl">
            <Routes />
          </Container>
        </ThemeProvider>
      </StylesProvider>
    </PageContextProvider>
  );
};

export default App;