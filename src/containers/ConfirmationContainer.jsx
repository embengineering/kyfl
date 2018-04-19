import {connect} from 'react-redux';
import * as confirmationActions from '../actions/confirmationActions';
import Confirmation from '../components/Confirmation.jsx';

const mapStateToProps = (state) => {
  return {
    isVisible: state.confirmation.isVisible,
    msg: state.confirmation.msg,
    title: state.confirmation.title,
    handleConfirm: state.confirmation.handleConfirm
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCancel: () => dispatch(confirmationActions.cancel())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
