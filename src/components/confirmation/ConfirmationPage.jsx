import React, { Component } from 'react';
import { Link } from 'react-router';
import SignaturePad from 'react-signature-pad';

//  For Icons
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';

import InputFields from './InputFields';
import SignatureDialog from './SignatureDialog';
import Stepper from '../stepper/Stepper';

export default class ConfirmationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signaturePadObj: undefined,
      signatureImgData: undefined,
      message: undefined,
      dialogOpen: false,
      signatureTrigger: 'signaturePadHidden',
      signatureButton: 'signatureButton',
      submitCheck: true,
    };

    this.clearSignatureField = this.clearSignatureField.bind(this);
    this.submitSignature = this.submitSignature.bind(this);
    this.triggerSignature = this.triggerSignature.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.exitSignatureField = this.exitSignatureField.bind(this);
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

  exitSignatureField() {
    this.setState({
      signatureTrigger: 'signaturePadHidden',
      signatureButton: 'signatureButton',
    });
  }

  submitSignature() {
    const { signaturePadObj } = this.state;
    const empty = signaturePadObj.isEmpty();

    if (!empty) {
      const signatureImgData = signaturePadObj.toDataURL();
      this.setState({
        signatureImgData,
        submitCheck: false,
        signatureTrigger: 'signaturePadHidden',
        signatureButton: 'signatureButton',
      });
    } else {
      this.setState({ dialogOpen: true });
    }
  }

  triggerSignature() {
    this.setState({
      signatureTrigger: 'signaturePad',
      signatureButton: 'signatureButtonHidden',
    });
  }

  render() {
    const { dialogOpen, submitCheck, signatureTrigger, signatureButton } = this.state;
    const style = {
      margin: 12,
    };

    return (
      <div id="confirmation-page">
        <h2 className="confirmation-title">CONFIRM & SIGN</h2>
        <p className="review-message">Review the details of your application, and sign below</p>
        <div className="view-text-container">
          <h4 className="view-text">View PDF of Application</h4>
        </div>

        <InputFields />

        <div className={signatureTrigger}>
          <SignaturePad className="signature-pad" ref={(c) => { this.signaturePad = c; }} />
          <button className="signature-exit" onClick={this.exitSignatureField}>X</button>
          <button className="signature-clear" onClick={this.clearSignatureField}>Erase</button>
          <button className="signature-submit" onClick={this.submitSignature}>O</button>
        </div>
        <div className={signatureButton}>
          <button onClick={this.triggerSignature} id="signature-trigger">Add Your Signature</button>
        </div>
        <IconButton
          iconClassName="muidocs-icon-custom-github"
        />
        {/* <RaisedButton label="Next Step" secondary={true} disabled={submitCheck} style={style} /> */}
        <Link to="payment" className="btn btn-default" id="submit">Next</Link>
        <SignatureDialog
          open={dialogOpen}
          closeDialog={this.handleClose}
        />
      </div>
    );
  }
}
