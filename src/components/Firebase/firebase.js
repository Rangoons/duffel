import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { config } from '../../constants/config';

const actionCodeSettings = {
  //URL to direct back to - must be whitelisted
  url: 'https://duffel-e3dab.firebaseapp.com/',
  //must be true
  handleCodeInApp: true,
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password = 'password') =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password = 'password') =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSendSignInLink = email =>
    this.auth
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => window.localStorage.setItem('emailForSignIn', email))
      .catch(err => console.log(err));

  doSignOut = () => this.auth.signOut();

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;
