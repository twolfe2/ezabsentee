import React, { Component } from 'react';
import { Link } from 'react-router';


export default class ConfirmationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_payment_success: false, //for showing #successNotification div
      is_processing: false, //for disabling payment button
      card_errors: [],
      product: {id: "001"},
      user: {name: "", email:""},
      shipping: {address1: "", address2: "", city: "", state: "", zip: ""}
    }

    this.chargeCardWithNonce = this.chargeCardWithNonce.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleShippingChange = this.handleShippingChange.bind(this);
  }

  componentDidMount() {
    //Place square payment form function in componentDidMount
    //Because it has to be called after the DOM renders the divs
    // this.paymentForm = new SqPaymentForm({
    //   applicationId: `${SQUARE_APPLICATION_ID}`,
    //   inputClass: 'sq-input',
    //   inputStyles: [
    //       {
    //         fontSize: '14px',
    //         padding: '7px 12px',
    //         backgroundColor: "transparent"
    //       }
    //     ],
    //   cardNumber: {
    //     elementId: 'sq-card-number',
    //     placeholder: '0000 0000 0000 0000'
    //   },
    //   cvv: {
    //     elementId: 'sq-cvv',
    //     placeholder: 'CVV'
    //   },
    //   expirationDate: {
    //     elementId: 'sq-expiration-date',
    //     placeholder: 'MM/YY'
    //   },
    //   postalCode: {
    //     elementId: 'sq-postal-code',
    //     placeholder: '94110'
    //   },
    //   callbacks: {
    //     cardNonceResponseReceived: function(errors, nonce, cardData) {
    //       if (errors){
    //         this.setState({is_processing: false, card_errors: errors});
    //       }else{
    //         this.setState({card_errors: []});
    //         this.chargeCardWithNonce(nonce);
    //       }
    //
    //     }.bind(this), //needed to bring this into context
    //     unsupportedBrowserDetected: function() {
    //       // Alert the buyer
    //     }.bind(this)
    //   }
    // });
    // this.paymentForm.build();
  }

  chargeCardWithNonce(nonce) {
    console.log("charging card with nonce");
    var url = "localhost:3001/purchase";
    var data = {
      nonce: nonce,
      charge_value: this.state.product.charge_value,
      name: this.state.user.name,
      email: this.state.user.email,
      street_address_1: this.state.shipping.address1,
      street_address_2: this.state.shipping.address2,
      city: this.state.shipping.city,
      state: this.state.shipping.state,
      zip: this.state.shipping.zip
    };
    console.log(data);

    $.post( url, data, function( data ) {
        if (data.status == 200) {
          this.setState({is_payment_success: true})
        }else if (data.status == 400){
          var errors = []
          for (var i =0; i < data.errors.length; i++){
            errors.push({message: data.errors[i].detail});
          }
          this.setState({card_errors: errors})
        }
        this.setState({is_processing: false})
    }.bind(this));
  }

  handleSubmit() {
    this.setState({ is_processing: true });
    this.paymentForm.requestCardNonce();
  }

  handleProductChange(product) {
    this.setState({ product: product })
  }

  handleUserChange(user) {
    this.setState({ user: user })
  }

  handleShippingChange(shipping) {
    this.setState({ shipping: shipping })
  }

  render() {
    // check for if this.state.is_payment_success == true to show confirmation screen
    return (
      <div id="payment-page">
        <h2 className="page-title">CONFIRM & SIGN</h2>
        <p className="page-subtitle">Don’t want to go to the post office? We take care of your absentee ballot
from start to finish, and for just a buck.</p>
        {/* <div className="price-tag">
          <p className="price-tag-title">Price</p>
          <p>$1.00</p>
        </div>
        <ProductFields product={this.state.product} handleChange={this.handleProductChange} />
        <UserFields user={this.state.user} handleChange={this.handleUserChange} />
        <ShippingFields shipping={this.state.shipping} handleChange={this.handleShippingChange} />
        <PaymentFields cardErrors={this.state.card_errors} /> */}
        <div>
          <input type="submit" id="submit" value="Buy Now" className="btn btn-primary" onClick={this.handleSubmit} disabled={this.state.is_processing}/>
        </div>
      </div>
    );
  }
}


class PaymentFields extends Component {
  render() {
    let cardErrorNodes = [];
    for (var key in this.props.cardErrors) {
      cardErrorNodes.push(<li key={key}>{this.props.cardErrors[key].message}</li>)
    }
    return (
      <div>
        <div id="card-errors">{cardErrorNodes}</div>

        <div>
          <label>Card Number</label>
          <div  id="sq-card-number"></div>
        </div>

        <div>
          <label>CVV</label>
          <div  id="sq-cvv"></div>
        </div>

        <div>
          <label>Expiration Date</label>
          <div  id="sq-expiration-date"></div>
        </div>

        <div>
          <label>Postal Code</label>
          <div  id="sq-postal-code"></div>
        </div>

      </div>
    );
  }
}
