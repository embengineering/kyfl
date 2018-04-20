import * as constants from '../constants';
import * as notificationActions from '../actions/notificationActions';
import * as confirmationActions from '../actions/confirmationActions';
import * as usersActions from '../actions/usersActions';
import firebase from 'firebase';

const goalsRef = firebase.database().ref().child('goals');
const historyRef = firebase.database().ref().child('history');

const setHistory = (action, key, state) => {
  const widget = state.widgetList[key];
  const currDate = new Date();
  const newRef = historyRef.child(key);
  newRef.push({
    createdBy: state.auth.displayName,
    currentLimit: widget.limit,
    currentValue: action === constants.INCREASE_WIDGET_VALUE
      ? (widget.value + 1)
      : (widget.value > 0 ? widget.value - 1 : widget.value),
    previousValue: widget.value,
    created: currDate.toISOString(),
    week: currDate.getWeek()
  });
};

export const decreaseWidgetValue = (key) => (dispatch, getState) => {
  goalsRef.child(key).transaction((data) => {
    data.value = data.value > 0 ? data.value - 1 : data.value;
    if (data.limit - data.value === 1) {
      dispatch(notificationActions.info(`Whoa! Wrong way junior!!!`));
    }
    return data;
  }, (error) => {
    if (error) {
      dispatch(notificationActions.error(`Oh no! Firebase transaction failed abnormally!`));
      console.log('Firebase transaction failed abnormally!', error);
    } else {
      setHistory(constants.DECREASE_WIDGET_VALUE, key, getState());
    }
  });
};

export const increaseWidgetValue = (key) => (dispatch, getState) => {
  goalsRef.child(key).transaction((data) => {
    data.value = data.value + 1;
    if (data.value === data.limit) {
      dispatch(notificationActions.success(`Sweeeeet! This task is completed! Nice Work!`));
    } else if (data.value > data.limit) {
      dispatch(notificationActions.success(`Look out, we have a badass over here! Overachiever...`));
    }
    return data;
  }, (error) => {
    if (error) {
      dispatch(notificationActions.error(`Oh no! Firebase transaction failed abnormally!`));
      console.log('Firebase transaction failed abnormally!', error);
    } else {
      setHistory(constants.INCREASE_WIDGET_VALUE, key, getState());
    }
  });
};

export const takeOwnership = (key) => (dispatch, getState) => {
  const auth = getState().auth;
  goalsRef.child(key).update({
    owner: usersActions.getUserKeyFromEmail(auth.email),
    avatar: auth.imageURL
  }, (error) => {
    if(error) {
      dispatch(notificationActions.error(`Oh no! Firebase transaction failed abnormally!`));
      console.log('Firebase transaction failed abnormally!', error);
    } else {
      dispatch(notificationActions.success(`Awesome! You own it!`));
    }
  });
};

export const removeWidget = (key) => (dispatch, getState) => {
  dispatch(confirmationActions.confirm({
    title: 'Delete Confirmation',
    msg: 'Are you sure do you want to proceed deleting this goal?',
    handleConfirm: () => {
      goalsRef.child(key).update({isDeleted: 1}, (error) => {
        if(error) {
          dispatch(notificationActions.error(`Oh no! Firebase transaction failed abnormally!`));
          console.log('Firebase transaction failed abnormally!', error);
        } else {
          dispatch(confirmationActions.cancel());
          dispatch({ type: constants.REMOVE_GOAL, key });
          dispatch(notificationActions.success(`Goal successfully removed!`));
        }
      });
    }
  }));
};

export const startListeningToWidgetList = () => (dispatch) => {
	goalsRef.orderByChild('isDeleted').equalTo(0).on('value', (snapshot) => {
		dispatch({
      type: constants.RECEIVE_WIDGETLIST_DATA,
      data: snapshot.val()
    });
	});
};

export const resetWidgetListToDefault = () => (dispatch, getState) => {
  const keys = Object.getOwnPropertyNames(getState().widgetList);
  keys.forEach(key => {
    // reset to Zero all except for goal1 - "People off the bench"
    if(key !== 'goal1') {
      goalsRef.child(key).transaction(data => {
        data.value = 0;
        return data;
      }, error => {
        if (error) {
          dispatch(notificationActions.error(`Oh no! Firebase transaction failed abnormally!`));
          console.log('Firebase transaction failed abnormally!', error);
        }
      });
    }
  });
};
