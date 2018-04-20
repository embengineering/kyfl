// misc
import React from 'react';
import '../scss/form.css';

// ui-library
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

// redux-form
import { reduxForm, Field } from 'redux-form';

// redux-form-material-ui
import { TextField } from 'redux-form-material-ui';

const ManageGoal = ({
    isVisible,
    canSubmit,
    handleCancel,
    handleValidForm,
    handleInvalidForm,
    handleSubmitForm
  }) => (
  <Dialog
    title={`Add Goal`}
    modal
    open={isVisible}
  >
    <form autoComplete="off">
      <div className="fields-wrapper">
        <Field
          className="form-field"
          component={TextField}
          hintText="What's the goal title?"
          label="Title"
          name='title'
          required
        />
        <Field
          className="form-field"
          component={TextField}
          hintText="What's the goal limit?"
          label="Limit"
          name='limit'
          required
        />
      </div>

      <div className="actions-wrapper">
        <FlatButton
          label="Cancel"
          secondary={true}
          onClick={handleCancel}
        />
        <FlatButton
          disabled={!canSubmit}
          label="Save"
          type="submit"
          primary={true}
          keyboardFocused={true}
        />
      </div>
    </form>
  </Dialog>
);

ManageGoal.defaultProps = {
  model: {}
};

const ManageGoalForm = reduxForm({
  form: 'manageGoal'
})(ManageGoal)

export default ManageGoalForm;
