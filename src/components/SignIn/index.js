import React, { useContext, useState, useEffect } from 'react';
import useReactRouter from 'use-react-router';

import { SignUpLink } from '../SignUp';
import RedirectIfAuth from './RedirectIfAuth'
import { FirebaseContext } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
  <div>
    <h1>Sign In</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = 'hello.brendanm@gmail.com'

function SignInForm() {
  const firebase = useContext(FirebaseContext)
  const { history } = useReactRouter();
  const [email, setEmail] = useState(INITIAL_STATE)
  const [isInvalid, setIsInvalid] = useState(false)
  useEffect(() => { setIsInvalid(email === '') })

  const onSubmit = event => {
    event.preventDefault();
    firebase.doSignInWithEmailAndPassword(email).then(() => {
      setEmail(INITIAL_STATE);
      history.push(ROUTES.HOME);
    });
  };

  const onChange = event => {
    setEmail(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <button disabled={isInvalid} type="submit">
        Sign In
        </button>
    </form>
  )
}

export default SignInPage;

export { SignInForm, RedirectIfAuth };
