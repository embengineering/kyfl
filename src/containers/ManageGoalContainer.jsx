import {connect} from 'react-redux';
import ManageGoal from '../components/ManageGoal.jsx';
import * as goalActions from '../actions/goalActions';

const mapStateToProps = ({ manageGoal }) => ({ ...manageGoal });

const mapDispatchToProps = dispatch => ({
  handleCancel: () => dispatch(goalActions.cancel()),
  handleValidForm: () => dispatch(goalActions.enableSubmit()),
  handleInvalidForm: () => dispatch(goalActions.disableSubmit()),
  handleSubmitForm: model => dispatch(goalActions.submit(model))
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageGoal);
