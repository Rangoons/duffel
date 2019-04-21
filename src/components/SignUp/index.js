import React, { useContext, useState, useEffect } from 'react';
import useReactRouter from 'use-react-router';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <h1>Sign Up</h1>

    <SignUpForm />
  </div>
);

const INITIAL_STATE = 'hello.brendanm@gmail.com';

function SignUpForm() {
  const firebase = useContext(FirebaseContext);
  const { history } = useReactRouter();
  const [email, setEmail] = useState(INITIAL_STATE);
  const [isInvalid, setIsInvalid] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    setIsInvalid(email === '');
  });

  const onSubmit = event => {
    event.preventDefault();
    firebase
      .doCreateUserWithEmailAndPassword(email)
      .then(authUser => {
        //create a user in the db
        return firebase.user(authUser.user.uid).set({
          email,
        });
      })
      .then(() => {
        setEmail(INITIAL_STATE);
        history.push(ROUTES.HOME);
      })
      .catch(err => {
        setError(err.message);
      });
  };

  const onChange = event => {
    setEmail(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={email} />
      <button type="submit" disabled={isInvalid}>
        Sign Up
      </button>
      {error}
    </form>
  );
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;
export { SignUpForm, SignUpLink };
