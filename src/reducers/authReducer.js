import * as constants from '../constants';
import initialState from '../utils/initialState';

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ATTEMPTING_LOGIN:
      return Object.assign({}, initialState, {
        currently: constants.AWAITING_AUTH_RESPONSE,
      });

    case constants.LOGOUT:
      return Object.assign({}, initialState);

    case constants.LOGIN_USER:
      return Object.assign({}, initialState, {
        currently: constants.LOGGED_IN,
        displayName: action.displayName,
        uid: action.uid,
        email: action.email,
        imageURL: action.imageURL
      });

    default:
        return state;
  }
};

export default authReducer;
