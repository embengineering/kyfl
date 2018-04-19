// misc
import React from 'react';
import '../scss/form.scss';

// ui-library
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

// formsy material-ui
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import Formsy from 'formsy-react';

const ManageGoal = ({
    isVisible,
    canSubmit,
    model,
    errorMessages,
    handleCancel,
    handleValidForm,
    handleInvalidForm,
    handleSubmitForm
  }) => (
  <Dialog
    title={(model.title ? `Update` : `Add`) + ` Goal` + (model.title ? ` - ` + model.title : ``)}
    modal
    open={isVisible}
  >
    <Formsy.Form
      onValid={handleValidForm}
      onInvalid={handleInvalidForm}
      onValidSubmit={handleSubmitForm}
      autoComplete="off"
    >
      <div href="#" className="fields-wrapper">
        <FormsyText
          className="form-field"
          name='title'
          required
          hintText="What's the goal title?"
          floatingLabelText="Title"
        />
        <FormsyText
          className="form-field"
          name='limit'
          required
          hintText="What's the goal limit?"
          floatingLabelText="Limit"
          validations="isNumeric"
          validationError={errorMessages.onlyNumeric}
        />
      </div>

      <div className="actions-wrapper">
        <FlatButton
          label="Cancel"
          secondary={true}
          onTouchTap={handleCancel}
        />
        <FlatButton
          disabled={!canSubmit}
          label="Save"
          type="submit"
          primary={true}
          keyboardFocused={true}
        />
      </div>
    </Formsy.Form>
  </Dialog>
);

export default ManageGoal;
