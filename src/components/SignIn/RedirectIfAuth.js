import React, { useContext } from 'react';
import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';
import {
  Route,
  Redirect,
} from "react-router-dom";

const RedirectIfAuth = ({ component: Component, ...rest }) => {
  const authUser = useContext(AuthUserContext);
  return (
    <Route
      {...rest}
      render={props => authUser !== null ? (
        <Redirect to={{ pathname: ROUTES.HOME }} />
      ) : (
          <Component {...props} />
        )}
    />
  );
}

export default RedirectIfAuth;