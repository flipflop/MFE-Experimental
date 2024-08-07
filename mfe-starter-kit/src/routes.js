import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollTop/ScrollTop'
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import NoMatch from './pages/NoMatch/NoMatch';
import PageContext from './components/PageContext/PageContext';

let Routes = (props) => {
  const usePageContext = useContext(PageContext);
  let appPrefix = usePageContext.app_prefix;

  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path={`/${appPrefix}/settings`}  component={ Settings } />
          <Route component={NoMatch} />
        </Switch>
      </ScrollToTop>
    </Router>
  )

}

export default Routes;