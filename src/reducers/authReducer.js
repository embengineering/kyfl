import * as constants from '../constants';
import initialState from '../utils/initialState';

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case constants.ATTEMPTING_LOGIN:
      return {
        ...state,
        currently: constants.AWAITING_AUTH_RESPONSE
      };

    case constants.LOGOUT:
      return {
        ...initialState.auth
      };

    case constants.LOGIN_USER:
      return {
        ...state,
        currently: constants.LOGGED_IN,
        displayName: action.displayName,
        uid: action.uid,
        email: action.email,
        imageURL: action.imageURL
      };

    default:
        return state;
  }
};

export default authReducer;
