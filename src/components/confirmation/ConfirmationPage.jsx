import React, { Component } from 'react';
// import { Link } from 'react-router';
import SignaturePad from 'react-signature-pad';

export default class ConfirmationPage extends Component {
  constructor(props) {
    super(props);

    this.isEmpty = this.isEmpty.bind(this);
  }

  componentDidMount() {
    const signaturePad = this.signaturePad;
    console.log('CDMsignaturePad: ', signaturePad);
  }

  isEmpty() {
    const signaturePad = this.signaturePad;
    let empty = signaturePad.isEmpty();
    console.log('CDMempty: ', empty);
  }

  render() {
    // check for if this.state.is_payment_success == true to show confirmation screen
    return (
      <div id="confirmation-page">
        <h2 className="page-title">CONFIRM & SIGN</h2>
        <p className="page-subtitle">Don’t want to go to the post office? We
        take care of your absentee ballot from start to finish, and for just a
        buck.</p>
        <div className="signaturePad">
          <SignaturePad clearButton="true" ref={(c) => { this.signaturePad = c; }} />
          <button onClick={this.isEmpty}>isEmpty</button>
          {/* <input type="submit" id="submit" value="Buy Now" className="btn
           btn-primary" onClick={this.handleSubmit} disabled={this.state.is_processing}/> */}
        </div>
      </div>
    );
  }
}
