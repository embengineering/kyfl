import * as constants from '../constants';
import * as notificationActions from '../actions/notificationActions';
import * as usersActions from '../actions/usersActions';
import firebase from 'firebase';

const fireRef = firebase.database();
var provider = new firebase.auth.GoogleAuthProvider();

export const startListeningToAuth = () => (dispatch, getState) => {
  firebase.auth().onAuthStateChanged(authData => {
    if (authData) {
      if(authData.provider === 'google' && authData.google) {
        const auth = {
          type: constants.LOGIN_USER,
          uid: authData.uid,
          displayName: authData.google.displayName || authData.google.username,
          email: authData.google.email,
          imageURL: authData.google.profileImageURL
        };

        dispatch(auth);
        usersActions.registerUser(auth);
        dispatch(notificationActions.success(`Welcome, \n` + auth.displayName + `!`));
      } else {

        dispatch({ type: constants.LOGOUT });
        fireRef.unauth();
        dispatch(notificationActions.warning(`Sorry, but your domain is not permitted!`));
      }

    } else if (getState().auth.currently !== constants.ANONYMOUS) {
      dispatch({ type: constants.LOGOUT });
    }

  });
};

export const attemptLogin = () => (dispatch, getState) => {
  dispatch({ type: constants.ATTEMPTING_LOGIN });
  firebase.auth().signInWithPopup(provider)
    .then(() => {})
    .catch(error => {
        dispatch(notificationActions.error(`Login failed! ` + error.message));
        dispatch({ type: constants.LOGOUT });
    });
};

export const logoutUser = () => (dispatch, getState) => {
  dispatch({ type: constants.LOGOUT });
  firebase.signOut()
    .then(() => {
      dispatch(notificationActions.success(`See you soon!`));
    })
    .catch(error => {
      dispatch(notificationActions.error(error.message));
    });
};
