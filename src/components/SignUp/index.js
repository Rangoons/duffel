import React, { useContext, useState, useEffect } from 'react';
import { FormGroup, InputGroup } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import {
  GradientContainer,
  LoginWrapper,
  StyledButton,
  StyledIcon,
} from '../shared/styled-components';

const SignUpPage = () => (
  <GradientContainer>
    <LoginWrapper>
      <h1>Sign Up</h1>

      <SignUpForm />
    </LoginWrapper>
  </GradientContainer>
);

const INITIAL_STATE = '';

const SignUpFormBase = ({ history }) => {
  const firebase = useContext(FirebaseContext);
  const [email, setEmail] = useState(INITIAL_STATE);
  const [password, setPassword] = useState(INITIAL_STATE);
  const [isInvalid, setIsInvalid] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    setIsInvalid(email === '' || password === '');
  });

  const onSubmit = event => {
    event.preventDefault();
    firebase
      .doCreateUserWithEmailAndPassword(email, password)
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

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <FormGroup label="Email" labelInfo="(required)" labelFor="email-input">
        <InputGroup
          id="email-input"
          placeholder="Email"
          type="text"
          onChange={handleEmailChange}
          value={email}
        />
      </FormGroup>
      <FormGroup
        label="Password"
        labelInfo="(required)"
        labelFor="password-input"
      >
        <InputGroup
          id="password-input"
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />
      </FormGroup>
      <StyledButton type="submit" disabled={isInvalid}>
        Sign Up
        <StyledIcon icon={IconNames.ARROW_RIGHT} />
      </StyledButton>
      {error}
      Already a member ? <Link to={ROUTES.LOGIN}>Sign In</Link>
    </form>
  );
};

const SignUpForm = withRouter(SignUpFormBase);

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;
export { SignUpForm, SignUpLink };
