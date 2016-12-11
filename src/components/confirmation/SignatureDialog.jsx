import React from 'react';
// import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const SignatureDialog = (props) => {
  const actions = [
    <FlatButton
      label="OK"
      primary={true}
      onTouchTap={props.closeDialog}
    />,
  ];

  return (
    <div>
      <Dialog
        title="Please sign before submitting."
        actions={actions}
        modal={false}
        open={props.open}
        onRequestClose={props.closeDialog}
      />
    </div>
  );
};

export default SignatureDialog;
