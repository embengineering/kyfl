import {connect} from 'react-redux';
import * as confirmationActions from '../actions/confirmationActions';
import Confirmation from '../components/Confirmation.jsx';

const mapStateToProps = ({ confirmation }) => ({ ...confirmation });

const mapDispatchToProps = dispatch => ({
  handleCancel: () => dispatch(confirmationActions.cancel())
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
