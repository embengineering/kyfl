import {connect} from 'react-redux';
import ManageGoal from '../components/ManageGoal.jsx';
import * as goalActions from '../actions/goalActions';
import { reduxForm } from 'redux-form';

const mapStateToProps = ({
  manageGoal
}) => ({
  ...manageGoal
});

const mapDispatchToProps = dispatch => ({
  handleCancel: () => dispatch(goalActions.cancel()),
  onSubmit: values => dispatch(goalActions.submit(values))
});

const ManageGoalForm = reduxForm({
  form: 'manageGoal',
  validate: goalActions.validateGoalForm
})(ManageGoal);

export default connect(mapStateToProps, mapDispatchToProps)(ManageGoalForm);
