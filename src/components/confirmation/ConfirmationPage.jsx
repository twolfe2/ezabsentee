import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Library for electronic signature */
import SignaturePad from 'react-signature-pad';

/* Importing dumb components */
import InputFields from './components/InputFields';
import SignatureButton from './components/SignatureButton';
import SignatureDialog from './components/SignatureDialog';
import SignaturePadUI from './components/SignaturePadUI';
import NextStep from './components/NextStep';

/* Confirmation Page Container */
class ConfirmationPage extends Component {
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
    const { dialogOpen, signatureTrigger, signatureButton } = this.state;
    const { userInfo } = this.props;
    return (
      <div id="confirmation-page">
        <h2 className="confirmation-title">CONFIRM & SIGN</h2>
        <p className="review-message">Review the details of your application, and sign below</p>
        <div className="view-text-container">
          <h4 className="view-text">View PDF of Application</h4>
        </div>

        <InputFields values={userInfo} />

        <SignatureButton
          signatureButton={signatureButton}
          triggerSignature={this.triggerSignature}
        />

        <div className={signatureTrigger}>
          <SignaturePad className="signature-pad" ref={(c) => { this.signaturePad = c; }} />
          <SignaturePadUI
            exitSignatureField={this.exitSignatureField}
            clearSignatureField={this.clearSignatureField}
            submitSignature={this.submitSignature}
          />
        </div>

        <SignatureDialog
          open={dialogOpen}
          closeDialog={this.handleClose}
        />

        <NextStep />
      </div>
    );
  }
}

/* Connecting to Redux state for user persisted data */
const mapDispatchToProps = (dispatch) => ({
});
const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationPage);
