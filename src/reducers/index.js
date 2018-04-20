import {combineReducers} from 'redux';

// custom reducers
import auth from '../reducers/authReducer';
import notification from '../reducers/notificationReducer';
import widgetList from '../reducers/widgetListReducer';
import manageGoal from '../reducers/manageGoalReducer';
import confirmation from '../reducers/confirmationReducer';

// form reducer
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth,
  notification,
  widgetList,
  manageGoal,
  confirmation,
  form: formReducer
});

export default rootReducer;
