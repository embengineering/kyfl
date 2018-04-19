// misc
import React from 'react';

// material-ui
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const Confirmation = ({
    isVisible,
    title,
    msg,
    handleConfirm,
    handleCancel
  }) => {
  const actions = [
      <FlatButton
        label="Cancel"
        secondary
        keyboardFocused
        onTouchTap={handleCancel}
      />,
      <FlatButton
        label="Confirm"
        primary
        onTouchTap={handleConfirm}
      />,
    ];

  return (
    <Dialog
      title={title}
      actions={actions}
      modal={false}
      open={isVisible}
    >
      {msg}
    </Dialog>
  );
};

export default Confirmation;
