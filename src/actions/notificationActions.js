import * as constants from '../constants';

const displayNotification = (title, msg, msgType) => (dispatch) => {
  dispatch({ type: constants.CLEAR_MESSAGE });
  dispatch({
    type: constants.RECEIVE_MESSAGE,
    title: title,
    msg: msg,
    msgType: msgType
  });
};

export const success = (msg) => displayNotification(`Notification`, msg, constants.SUCCESS);
export const info = (msg) => displayNotification(`Info`, msg, constants.INFO);
export const warning = (msg) => displayNotification(`Warning`, msg, constants.WARNING);
export const error = (msg) => displayNotification(`Error`, msg, constants.ERROR);
