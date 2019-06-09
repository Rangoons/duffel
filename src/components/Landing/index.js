import React from 'react';
import { H1, Blockquote } from '@blueprintjs/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { GradientContainer } from '../shared/styled-components';

const LandingPage = () => (
  <GradientContainer>
    <Wrapper>
      <Header>Welcome to Duffel</Header>
      <div>
        <p>
          Duffel is a pipe dream of mine to have an application that manages
          your address for you.
        </p>
        <p>
          The goal is to provide users with a unique & shareable identifier,
          similar to a phone number. Allowing the services you use, such as your
          bank and subscriptions, to always have your latest address, without
          you having to recall which services need to be updated when you move.
        </p>
      </div>
    </Wrapper>
  </GradientContainer>
);

const Wrapper = styled.div`
  width: 50%;
  height: 70vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Header = styled(H1)`
  color: #fff;
  width: 100%;
  text-align: center;
`;

export default LandingPage;
