import React, { useContext, useEffect, useState } from 'react';
import { withAuthorization, AuthUserContext } from '../Session';
import { FirebaseContext } from '../Firebase';

const AdminPage = () => {
  const authUser = useContext(AuthUserContext);
  const firebase = useContext(FirebaseContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.users().once('value', snapshot => {
      setUsers(snapshot.val());
    });
  }, [firebase]);
  return (
    <div>
      <h1>Admin: {authUser.email}</h1>
      <div>users: {JSON.stringify(users)}</div>
    </div>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AdminPage);
