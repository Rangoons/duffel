import React, { useContext } from 'react';
import { withAuthorization, AuthUserContext } from '../Session';

const AccountPage = () => {
  const authUser = useContext(AuthUserContext);
  return (
    <div>
      <h1>Account: {authUser.email}</h1>
    </div>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
