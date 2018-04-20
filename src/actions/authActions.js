import * as constants from '../constants';
import * as notificationActions from '../actions/notificationActions';
import * as usersActions from '../actions/usersActions';
import firebase from 'firebase';

const signIn = ({
  uid,
  displayName,
  email,
  photoURL
}) => dispatch => {
  const auth = {
    type: constants.LOGGED_IN,
    uid,
    displayName,
    email,
    imageURL: photoURL
  };

  dispatch(auth);
  usersActions.registerUser(auth);
}

export const startListeningToAuth = () => (dispatch, getState) => {
  // listen to auth when auth redirect happens
  firebase.auth().getRedirectResult().then(authData => {
    if(authData && authData.additionalUserInfo) {
      dispatch(signIn({
        uid: authData.user.uid,
        displayName: authData.additionalUserInfo.profile.name,
        email: authData.additionalUserInfo.profile.email,
        photoURL: authData.additionalUserInfo.profile.picture
      }));
    } else {
      dispatch({ type: constants.LOGOUT });
    }
  }).catch(error => {
    dispatch(notificationActions.error(`Login failed! ` + error.message));
    dispatch({ type: constants.LOGOUT });
  });

  // listen to auth when page change for a change of token
  firebase.auth().onIdTokenChanged(function(authData) {
    if (authData && authData.providerData.length) {
      const { uid, displayName, email, photoURL } = authData.providerData[0];
      dispatch(signIn({
        uid,
        displayName,
        email,
        photoURL
      }));
      dispatch(notificationActions.success(`Welcome, \n` + displayName + `!`));
    }
  });
};

export const attemptLogin = () => (dispatch, getState) => {
  dispatch({ type: constants.ATTEMPTING_LOGIN });
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/userinfo.email');
      provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

      firebase.auth().signInWithRedirect(provider)
        .then(authData => dispatch(signIn({
          uid: authData.user.uid,
          displayName: authData.additionalUserInfo.profile.name,
          email: authData.additionalUserInfo.profile.email,
          photoURL: authData.additionalUserInfo.profile.picture
        })))
        .catch(error => {
            dispatch(notificationActions.error(`Login failed! ` + error.message));
            dispatch({ type: constants.LOGOUT });
        });
    }).catch(function(error) {
      dispatch(notificationActions.error(`Login failed! ` + error.message));
      dispatch({ type: constants.LOGOUT });
    });

};

export const logoutUser = () => (dispatch, getState) => {
  dispatch({ type: constants.LOGOUT });
  firebase.auth().signOut()
    .then(() => {
      dispatch(notificationActions.success(`See you soon!`));
    })
    .catch(error => {
      dispatch(notificationActions.error(error.message));
    });
};
