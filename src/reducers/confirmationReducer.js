import * as constants from '../constants';
import initialState from '../utils/initialState';

const confirmationReducer = (state = initialState.confirmation, action) => {
  switch (action.type) {
    case constants.CONFIRM:
      return {
        ...state,
        isVisible: true,
        msg: action.msg,
        title: action.title,
        handleConfirm: action.handleConfirm
      };

    case constants.CONFIRM_CANCEL:
      return {
        ...initialState.confirmation
      };

    default:
        return state;
  }
};

export default confirmationReducer;
