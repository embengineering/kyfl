import * as constants from '../constants';
import initialState from '../utils/initialState';

export const confirm = (args) => {
  return {
    type: constants.CONFIRM,
    msg: args.msg || initialState.confirmation.msg,
    title: args.title || initialState.confirmation.title,
    handleConfirm: args.handleConfirm
  };
};

export const cancel = () => {
  return {
    type: constants.CONFIRM_CANCEL
  };
};
