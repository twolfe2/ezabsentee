import React, { Component } from 'react';
// import { Link } from 'react-router';
import SignaturePad from 'react-signature-pad';

export default class ConfirmationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signaturePad: '',
    };

    this.isEmpty = this.isEmpty.bind(this);
    this.clear = this.clear.bind(this);
    this.toDataURL = this.toDataURL.bind(this);
  }

  componentDidMount() {
  }

  isEmpty() {
    const signaturePad = this.signaturePad;
    const empty = signaturePad.isEmpty();
    console.log('CDMempty: ', empty);
  }

  clear() {
    const signaturePad = this.signaturePad;
    const clear = signaturePad.clear();
    console.log('CDMclear: ', clear);
  }

  toDataURL() {
    const signaturePad = this.signaturePad;
    const toDataUrl = signaturePad.toDataUrl();
    console.log('CDMtoDataUrl: ', toDataUrl);
  }

  // fromDataURL() {
  //   const signaturePad = this.signaturePad;
  //   const fromDataURL = signaturePad.fromDataURL(base64String);
  //   console.log('CDMfromDataURL: ', fromDataURL);
  // }

  render() {
    return (
      <div id="payment-page">
        <h2 className="page-title">CONFIRM & SIGN</h2>
        <p className="page-subtitle">Don’t want to go to the post office? We
        take care of your absentee ballot from start to finish, and for just a
        buck.</p>
        <div className="signaturePad">
          <SignaturePad clearButton="true" ref={(c) => { this.signaturePad = c; }} />
          <button onClick={this.isEmpty}>isEmpty</button>
          <button onClick={this.clear}>clear</button>
          <button onClick={this.toDataURL}>toDataURL</button>
          {/* <input type="submit" id="submit" value="Buy Now" className="btn
           btn-primary" onClick={this.handleSubmit} disabled={this.state.is_processing}/> */}
        </div>
      </div>
    );
  }
}
