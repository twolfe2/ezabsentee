import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class SignatureDialog extends Component {
  render() {
    console.log('this.props: ', this.props);
    const { open, closeDialog, openDialog } = this.props;

    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={closeDialog}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog" onTouchTap={openDialog} />
        <Dialog
          title="Please make sure to sign before submitting."
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={closeDialog}
        >
        </Dialog>
      </div>
    );
  }
}
