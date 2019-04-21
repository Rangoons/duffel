import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDwnCOSxrJaK7dXKzx4dUD3SgoggS_-ack',
  authDomain: 'duffel-e3dab.firebaseapp.com',
  databaseURL: 'https://duffel-e3dab.firebaseio.com',
  projectId: 'duffel-e3dab',
  storageBucket: 'duffel-e3dab.appspot.com',
  messagingSenderId: '956847708835',
};

const actionCodeSettings = {
  //URL to direct back to - must be whitelisted
  url: 'https://localhost',
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

  // doSendSignInLink = email =>
  //   this.auth
  //     .sendSignInLinkToEmail(email, actionCodeSettings)
  //     .then(() => window.localStorage.setItem('emailForSignIn', email))
  //     .catch(err => console.log(err));

  doSignOut = () => this.auth.signOut();

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;
