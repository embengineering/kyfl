// misc
import React from 'react';
import '../scss/form.css';

// ui-library
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

// redux-form
import { Field } from 'redux-form';

// redux-form-material-ui
import { TextField } from 'redux-form-material-ui';

const ManageGoal = ({
    isVisible,
    reset,
    submitting,
    onSubmit,
    handleSubmit,
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
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
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
          disabled={submitting}
          label="Save"
          type="submit"
          primary={true}
          keyboardFocused={true}
        />
      </div>
    </form>
  </Dialog>
);

export default ManageGoal;
