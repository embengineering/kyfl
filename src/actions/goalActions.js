import * as constants from '../constants';
import * as notificationActions from '../actions/notificationActions';
import initialState from '../utils/initialState';
import firebase from 'firebase';

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

export const enableSubmit = () => {
  return {
    type: constants.MANAGE_GOAL_ENABLE_SUBMIT
  };
};

export const disableSubmit = () => {
  return {
    type: constants.MANAGE_GOAL_DISABLE_SUBMIT
  };
};

export const submit = (model) => (dispatch, getState) => {
  const widget = Object.assign({}, initialState.manageGoal.model, model);
  goalsRef.push(widget, (error) => {
    if (error) {
      dispatch(notificationActions.error(`Oh no! Firebase transaction failed abnormally!`));
      console.log('Firebase transaction failed abnormally!', error);
    } else {
      dispatch(notificationActions.success(`Yeah! New goal successfully created!`));
      dispatch({
        type: constants.MANAGE_GOAL_CANCEL
      });
    }
  });
};
