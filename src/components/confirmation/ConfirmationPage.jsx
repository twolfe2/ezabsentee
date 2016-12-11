import React, { Component } from 'react';
import { Link } from 'react-router';
import SignaturePad from 'react-signature-pad';

import SignatureDialog from './SignatureDialog';

export default class ConfirmationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signatureImgData: 'none',
      message: undefined,
      dialogOpen: false,
    };

    this.clearSignatureField = this.clearSignatureField.bind(this);
    this.submitSignature = this.submitSignature.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ dialogOpen: true });
  }

  handleClose() {
    this.setState({ dialogOpen: false });
  }

  clearSignatureField() {
    const signaturePad = this.signaturePad;
    signaturePad.clear();
  }

  submitSignature() {
    const signaturePad = this.signaturePad;
    const empty = signaturePad.isEmpty();

    if (!empty) {
      const signatureImgData = signaturePad.toDataURL();
      this.setState({ signatureImgData });
    } else {
      this.setState({ dialogOpen: true });
    }
  }

  render() {
    const { dialogOpen } = this.state;
    return (
      <div id="confirmation-page">
        <h2 className="page-title">CONFIRM & SIGN</h2>
        <p className="page-subtitle">Don’t want to go to the post office? We
        take care of your absentee ballot from start to finish, and for just a
        buck.</p>
        <div className="signaturePad">
          <SignaturePad ref={(c) => { this.signaturePad = c; }} />
          <button onClick={this.clearSignatureField}>Redo/Clear</button>
          <button onClick={this.submitSignature}>Checkmark</button>
        </div>
        <Link to="payment" className="btn btn-primary" id="submit">Submit</Link>
        <SignatureDialog
          open={dialogOpen}
          openDialog={this.handleOpen}
          closeDialog={this.handleClose}
        />
      </div>
    );
  }
}
