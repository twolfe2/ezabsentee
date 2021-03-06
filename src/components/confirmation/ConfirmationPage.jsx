import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Library for electronic signature */
import SignaturePad from 'react-signature-pad';

/* Import action to update userInfo for user edits */
import InputActions from '../../actions/inputActions';

/* Dumb/Presentational components */
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
      updatedUserInfo: props.userInfo,
      signaturePadObj: undefined,
      signatureImgData: undefined,
      message: undefined,
      dialogOpen: false,
      signatureTrigger: 'signaturePadHidden',
      signatureButton: 'signatureButton',
      submitCheck: true,
    };

    this.handleInputFieldsChanges = this.handleInputFieldsChanges.bind(this);
    this.clearSignatureField = this.clearSignatureField.bind(this);
    this.submitSignature = this.submitSignature.bind(this);
    this.triggerSignature = this.triggerSignature.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.exitSignatureField = this.exitSignatureField.bind(this);
    this.sendUpdates = this.sendUpdates.bind(this);
  }

  /*  Upon mounting create the electric signature pad object */
  componentDidMount() {
    const signaturePadObj = this.signaturePad;
    this.setState({ signaturePadObj });
  }

  /*  Handle any input field edits from user */
  handleInputFieldsChanges(updatedUserInfo) {
    this.setState({ updatedUserInfo });
  }

  /*  Closing SignatureDialog modal */
  handleClose() {
    this.setState({ dialogOpen: false });
  }

  /*  UI action for signature pad */
  clearSignatureField() {
    const { signaturePadObj } = this.state;
    signaturePadObj.clear();
  }

  /*  UI action for signature pad */
  exitSignatureField() {
    this.setState({
      signatureTrigger: 'signaturePadHidden',
      signatureButton: 'signatureButton',
    });
  }

  /* UI action for signature pad - Upon submission of the signature, check if
     canvas is empty, if so open modal SignatureDialog */
  submitSignature() {
    const { signaturePadObj } = this.state;
    const isCanvasEmpty = signaturePadObj.isEmpty();

    if (isCanvasEmpty) {
      this.setState({ dialogOpen: true });
    } else {
      const signatureImgData = signaturePadObj.toDataURL();
      this.setState({
        signatureImgData,
        submitCheck: false,
        signatureTrigger: 'signaturePadHidden',
        signatureButton: 'signatureButton',
      });
    }
  }

  /*  UI state change: switching between 'Add Your Signature' button or the signatre pad */
  triggerSignature() {
    this.setState({
      signatureTrigger: 'signaturePad',
      signatureButton: 'signatureButtonHidden',
    });
  }

  /*  Upon submission, action is dispatched to update store with edited User Info details */
  sendUpdates(info) {
    this.props.updateUser(info);
  }

  render() {
    const { dialogOpen, signatureTrigger, signatureButton, updatedUserInfo } = this.state;
    const { userInfo } = this.props;
    return (
      <div id="confirmation-page">
        <h2 className="confirmation-title">CONFIRM & SIGN</h2>
        <p className="review-message">Review the details of your application, and sign below</p>
        <div className="view-text-container">
          <h4 className="view-text">View PDF of Application</h4>
        </div>

        <InputFields previousInfo={userInfo} handleChanges={this.handleInputFieldsChanges} />

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

        <NextStep sendUpdates={this.sendUpdates} userInfo={updatedUserInfo} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateUser(info) {
    return dispatch(InputActions.sendUserInfo(info));
  },
});
const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationPage);
