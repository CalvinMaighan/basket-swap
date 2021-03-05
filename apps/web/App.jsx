import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import routes, { ROUTE_HOME } from './src/routes/routes';
import { GlobalStyles, _app } from 'design/styles/global';
import Header from './src/shared/header/Header';

const LazyHome = routes[ROUTE_HOME];

const App = () => {
  return (
    <_app>
      <Header />
      <Suspense fallback={<div>Pulse Effect</div>}>
        <Router>
          <GlobalStyles />
          <Switch>
            <Route path={`${ROUTE_HOME}`} component={() => <LazyHome />} />
            <Redirect to={ROUTE_HOME} />
          </Switch>
        </Router>
      </Suspense>
    </_app>
  );
};

export default App;
