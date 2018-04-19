import * as constants from '../constants';
import initialState from '../utils/initialState';

const widgetListReducer = (state = initialState.widgetList, action) => {
  switch (action.type) {
    case constants.INCREASE_WIDGET_VALUE:
      return state.map(widget => widgetReducer(widget, action));

    case constants.DECREASE_WIDGET_VALUE:
      return state.map(widget => widgetReducer(widget, action));

    case constants.RECEIVE_WIDGETLIST_DATA:
      return Object.assign({}, action.data);

    default:
        return state;
  }
};

const widgetReducer = (state, action) => {
  switch (action.type) {
    case constants.INCREASE_WIDGET_VALUE:
      return state;

    case constants.DECREASE_WIDGET_VALUE:
      return state;

    default:
        return state;
  }
};

export default widgetListReducer;
