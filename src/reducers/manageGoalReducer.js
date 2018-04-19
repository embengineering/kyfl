import * as constants from '../constants';
import initialState from '../utils/initialState';

const manageGoalReducer = (state = initialState.manageGoal, action) => {
  switch (action.type) {
    case constants.MANAGE_GOAL_SHOW:
      return Object.assign({}, state, {
        isVisible: true
      });

    case constants.MANAGE_GOAL_CANCEL:
      return Object.assign({}, initialState.manageGoal);

    case constants.MANAGE_GOAL_ENABLE_SUBMIT:
      return Object.assign({}, state, {
        canSubmit: true
      });

    case constants.MANAGE_GOAL_DISABLE_SUBMIT:
      return Object.assign({}, state, {
        canSubmit: false
      });

    default:
      return state;
  }
};

export default manageGoalReducer;
