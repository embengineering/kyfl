import * as constants from '../constants';
import initialState from '../utils/initialState';

const widgetListReducer = (state = initialState.widgetList, action) => {
  switch (action.type) {
    case constants.RECEIVE_WIDGETLIST_DATA:
      return {
        ...state,
        ...action.data
      };

    default:
        return state;
  }
};

export default widgetListReducer;
