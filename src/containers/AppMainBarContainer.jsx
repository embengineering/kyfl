import {connect} from 'react-redux';
import * as authActions from '../actions/authActions';
import * as widgetListActions from '../actions/widgetListActions';
import AppMainBar from '../components/AppMainBar.jsx';

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => ({
  onAttemptLogin: () => dispatch(authActions.attemptLogin()),
  onLogoutUser: () => dispatch(authActions.logoutUser()),
  onResetData: () => dispatch(widgetListActions.resetWidgetListToDefault())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppMainBar);
