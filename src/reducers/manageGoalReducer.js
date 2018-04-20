import * as constants from '../constants';
import initialState from '../utils/initialState';

const manageGoalReducer = (state = initialState.manageGoal, action) => {
  switch (action.type) {
    case constants.MANAGE_GOAL_SHOW:
      return {
        ...state,
        isVisible: true
      };

    case constants.MANAGE_GOAL_CANCEL:
      return {
        ...state,
        isVisible: false
      };

    case constants.MANAGE_GOAL_ENABLE_SUBMIT:
      return {
        ...state,
        canSubmit: true
      };

    case constants.MANAGE_GOAL_DISABLE_SUBMIT:
      return {
        ...state,
        canSubmit: false
      };

    default:
      return state;
  }
};

export default manageGoalReducer;
