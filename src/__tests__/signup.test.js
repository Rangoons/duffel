import 'jest-dom/extend-expect';
import React from 'react';
import ReactDOM from 'react-dom';
import SignUpPage from '../components/SignUp';
import { BrowserRouter } from 'react-router-dom';
import Firebase, { FirebaseContext } from '../components/Firebase';

test('sign up page renders an input without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    </FirebaseContext.Provider>,
    div
  );
  expect(div.querySelector('input')).toHaveAttribute('type', 'text');
});
