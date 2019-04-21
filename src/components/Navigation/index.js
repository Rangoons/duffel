import React, { useContext } from 'react';
import { AuthUserContext } from '../Session';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import PrivateRoute from './PrivateRoute';

const Navigation = () => {
  const authUser = useContext(AuthUserContext);

  return (
    <React.Fragment>
      {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    </React.Fragment>
  );
};
const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.LOGIN}>Sign In</Link>
    </li>
  </ul>
);
export default Navigation;
export { PrivateRoute };
