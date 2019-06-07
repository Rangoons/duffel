import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { withAuthentication } from './components/Session';
// import LandingPage from './components/Landing';
import SignUpPage from './components/SignUp';
import SignInPage, { RedirectIfAuth } from './components/SignIn';
import Home from './components/Home';
import AccountPage from './components/Account';
import AdminPage from './components/Admin';
import * as ROUTES from './constants/routes';

const App = () => (
  <Router>
    <Navigation />

    <hr />

    {/* <Route exact path={ROUTES.LANDING} component={LandingPage} /> */}
    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
    <RedirectIfAuth path={ROUTES.LOGIN} component={SignInPage} />
    <Route path={ROUTES.HOME} component={Home} />
    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
    <Route path={ROUTES.ADMIN} component={AdminPage} />
  </Router>
);

export default withAuthentication(App);
