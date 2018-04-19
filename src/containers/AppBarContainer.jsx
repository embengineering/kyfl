import {connect} from 'react-redux';
import * as authActions from '../actions/authActions';
import * as widgetListActions from '../actions/widgetListActions';
import AppMainBar from '../components/AppMainBar.jsx';

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAttemptLogin: () => { dispatch(authActions.attemptLogin()); },
    onLogoutUser: () => { dispatch(authActions.logoutUser()); },
    onResetData: () => { dispatch(widgetListActions.resetWidgetListToDefault()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppMainBar);
