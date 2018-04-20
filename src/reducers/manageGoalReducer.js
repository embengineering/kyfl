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

    default:
      return state;
  }
};

export default manageGoalReducer;
