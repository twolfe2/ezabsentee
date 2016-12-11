import React, { Component } from 'react';
import { Link } from 'react-router';
import SignaturePad from 'react-signature-pad';

import SignatureDialog from './SignatureDialog';
import Stepper from '../stepper/Stepper';

//  TODO: add input forms
//  TODO: add ternary toggle for SignaturePad
//  TODO: dumbify SignatureDialog component
export default class ConfirmationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signaturePadObj: undefined,
      signatureImgData: undefined,
      message: undefined,
      dialogOpen: false,
    };

    this.clearSignatureField = this.clearSignatureField.bind(this);
    this.submitSignature = this.submitSignature.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    const signaturePadObj = this.signaturePad;
    this.setState({ signaturePadObj });
  }

  handleClose() {
    this.setState({ dialogOpen: false });
  }

  clearSignatureField() {
    const { signaturePadObj } = this.state;
    signaturePadObj.clear();
  }

  submitSignature() {
    const { signaturePadObj } = this.state;
    const empty = signaturePadObj.isEmpty();

    if (!empty) {
      const signatureImgData = signaturePadObj.toDataURL();
      this.setState({ signatureImgData });
    } else {
      this.setState({ dialogOpen: true });
    }
  }

  render() {
    const { dialogOpen } = this.state;
    return (
      <div id="confirmation-page">
        <h2 className="confirmationTitle">CONFIRM & SIGN</h2>
        <p className="page-subtitle">Review the details of your application, and sign below</p>
        <div className="Rectangle-5"><a href="http://elections.cdn.sos.ca.gov/vote-by-mail/pdf/vote-by-mail-application.pdf" target="_blank">View PDF of application</a></div>
        <div className="signaturePad">
          <SignaturePad ref={(c) => { this.signaturePad = c; }} />
          <button onClick={this.clearSignatureField}>Redo/Clear</button>
        </div>
        <Link to="payment" className="btn btn-primary" id="submit">Submit</Link>
        <div className="confirmation-stepper">
          <Stepper step={2} />
        </div>
        <SignatureDialog
          open={dialogOpen}
          closeDialog={this.handleClose}
        />
      </div>
    );
  }
}
