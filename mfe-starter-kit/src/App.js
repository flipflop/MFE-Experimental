import React from 'react';
import { PageContextProvider } from './components/PageContext/PageContext';
import Routes from './routes';

const App = (props) => {

  return (
    <PageContextProvider value={props}>
      <Routes />
    </PageContextProvider>
  );
};

export default App;