import {combineReducers} from 'redux';

// custom reducers
import auth from '../reducers/authReducer';
import notification from '../reducers/notificationReducer';
import widgetList from '../reducers/widgetListReducer';
import manageGoal from '../reducers/manageGoalReducer';
import confirmation from '../reducers/confirmationReducer';

const rootReducer = combineReducers({
  auth,
  notification,
  widgetList,
  manageGoal,
  confirmation
});

export default rootReducer;
