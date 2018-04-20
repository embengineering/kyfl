import * as constants from '../constants';
import initialState from '../utils/initialState';

const notificationReducer = (state = initialState.notification, action) => {
  switch (action.type) {
    case constants.CLEAR_MESSAGE:
      return {
        ...initialState.notification,
      };

    case constants.RECEIVE_MESSAGE:
      return {
        ...state,
        title: action.title,
        msg: action.msg,
        msgType: action.msgType
      };

    default:
        return state;
  }
};

export default notificationReducer;
