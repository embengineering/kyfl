import * as constants from '../constants';
import * as notificationActions from '../actions/notificationActions';
import * as usersActions from '../actions/usersActions';
import firebase from 'firebase';
import initialState from '../utils/initialState';

const goalsRef = firebase.database().ref().child('goals');

export const show = () => {
  return {
    type: constants.MANAGE_GOAL_SHOW
  };
};

export const cancel = () => {
  return {
    type: constants.MANAGE_GOAL_CANCEL
  };
};

export const submit = ({ limit, title }) => (dispatch, getState) => new Promise((resolve, reject) => {
  const { auth } = getState();
  const widget = {
    avatar: initialState.manageGoal.defaultAvatar,
    limit: Number(limit),
    title,
    value: 0,
    isDeleted: 0,
    owner: null
  };
  goalsRef.push(widget, error => {
    if (!error) {
      dispatch(notificationActions.success(`Yeah! New goal successfully created!`));
      dispatch({ type: constants.MANAGE_GOAL_CANCEL });
      resolve();
    } else {
      dispatch(notificationActions.error(`Oh no! Firebase transaction failed abnormally!`));
      console.log('Firebase transaction failed abnormally!', error);
      reject(error);
    }
  });
});

export const validateGoalForm = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  if (!values.limit) {
    errors.limit = 'Required';
  } else if (isNaN(Number(values.limit))) {
    errors.limit = 'Must be a number';
  }
  return errors;
};
