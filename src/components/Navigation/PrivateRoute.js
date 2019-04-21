import React, { useContext } from 'react';
import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';
import {
  Route,
  Redirect,
} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authUser = useContext(AuthUserContext);
  return (
    <Route
      {...rest}
      render={props => authUser ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: ROUTES.LOGIN, state: { from: props.location } }} />
        )}
    />
  );
}

export default PrivateRoute;