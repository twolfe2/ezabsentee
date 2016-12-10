import React, { Component } from 'react';
// import { Link } from 'react-router';
import SignaturePad from 'react-signature-pad';

export default class ConfirmationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.isEmpty = this.isEmpty.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleShippingChange = this.handleShippingChange.bind(this);
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

  handleSubmit() {
    this.setState({ is_processing: true });
    this.paymentForm.requestCardNonce();
  }

  handleProductChange(product) {
    this.setState({ product });
  }

  handleUserChange(user) {
    this.setState({ user });
  }

  handleShippingChange(shipping) {
    this.setState({ shipping });
  }

  render() {
    // check for if this.state.is_payment_success == true to show confirmation screen
    return (
      <div id="payment-page">
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


// class PaymentFields extends Component {
//   render() {
//     let cardErrorNodes = [];
//     for (var key in this.props.cardErrors) {
//       cardErrorNodes.push(<li key={key}>{this.props.cardErrors[key].message}</li>)
//     }
//     return (
//       <div>
//         <div id="card-errors">{cardErrorNodes}</div>
//
//         <div>
//           <label>Card Number</label>
//           <div  id="sq-card-number"></div>
//         </div>
//
//         <div>
//           <label>CVV</label>
//           <div  id="sq-cvv"></div>
//         </div>
//
//         <div>
//           <label>Expiration Date</label>
//           <div  id="sq-expiration-date"></div>
//         </div>
//
//         <div>
//           <label>Postal Code</label>
//           <div  id="sq-postal-code"></div>
//         </div>
//
//       </div>
//     );
//   }
// }
