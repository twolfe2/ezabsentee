import React, { Component } from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import ProductFields from './ProductFields';
import UserFields from './UserFields';
import ShippingFields from './ShippingFields';
import Stepper from '../stepper/Stepper';
var $ = require ('jquery');

const SQUARE_APPLICATION_ID = "sandbox-sq0idp-sC2SWt1rPYYkKzOWkRHE_Q"

export default class PaymentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_payment_success: false, //for showing #successNotification div
      is_processing: false, //for disabling payment button
      card_errors: [],
      product: {
        charge_value: "1"
      },
      user: {
        name: "",
        email:""
      },
      shipping: {
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: ""
      }
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
    this.paymentForm = new SqPaymentForm({
      applicationId: `${SQUARE_APPLICATION_ID}`,
      inputClass: 'sq-input',
      inputStyles: [
          {
            padding: '9px 1px',
            backgroundColor: "transparent"
          }
        ],
      cardNumber: {
        fontSize: '12px',
        elementId: 'sq-card-number',
        placeholder: '0000 0000 0000 0000'
      },
      cvv: {
        fontSize: '14px',
        elementId: 'sq-cvv',
        placeholder: 'CVV'
      },
      expirationDate: {
        fontSize: '14px',
        elementId: 'sq-expiration-date',
        placeholder: 'MM/YY'
      },
      postalCode: {
        fontSize: '14px',
        elementId: 'sq-postal-code',
        placeholder: '94110'
      },
      callbacks: {
        cardNonceResponseReceived: function(errors, nonce, cardData) {
          if (errors){
            this.setState({is_processing: false, card_errors: errors});
          }else{
            this.setState({card_errors: []});
            this.chargeCardWithNonce(nonce);
          }

        }.bind(this), //needed to bring this into context
        unsupportedBrowserDetected: function() {
          // Alert the buyer
        }.bind(this)
      }
    });
    this.paymentForm.build();
  }

  chargeCardWithNonce(nonce) {
    console.log("charging card with nonce");
    var url = "http://localhost:3001/charges/charge_card";
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

    // to do: fix call to API

    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data)
    // }).then(function(result) {
    //   console.log('success', result)
    //   debugger;
    // }).catch(function(result){
    //   debugger;
    //   console.log('failure', result)
    // })

  }

  handleSubmit() {
    this.setState({ is_processing: true });
    // this.paymentForm.requestCardNonce();

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
    // switch back to input type submit when making actual app
    return (
      <div id="payment-page">
        <h2 className="page-title">PAY UP, YO</h2>
        <p className="page-subtitle">Pays for printing, shipping, and handling</p>
        <div className="price-tag">
          <p className="price-tag-title">Price</p>
          <p>$2.00</p>
        </div>
        <div id="payment-inputs">
          <UserFields user={this.state.user} handleChange={this.handleUserChange} />
          <PaymentFields cardErrors={this.state.card_errors} />
        </div>

        {/* <div>
          <input type="submit" id="submit" value="Finish & Send" className="btn btn-primary" onClick={this.handleSubmit} disabled={this.state.is_processing}/>
        </div> */}
          <div className="payment-stepper"><Stepper step={3} /></div>

            <Link id="payment-submit" to="/finish">Finish & Send</Link>

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
      <div className="card-info container">
        <div id="card-errors">{cardErrorNodes}</div>

        <div className='row'>


          <div className='card-number col-md-6'>

            <label>Card Number</label>
            <div id="sq-card-number"></div>
          </div>


          <div className='expiration-date col-md-6'>
            <label>Expiration</label>
            <div id="sq-expiration-date"></div>
          </div>

      <div className='row'>
        <div className='cvv col-md-6'>
          <label>CVV</label>
          <div id="sq-cvv"></div>
        </div>

        <div className='cc-postal-code col-md-6'>
          <label>Postal Code</label>
          <div  id="sq-postal-code"></div>
        </div>

        </div>

      </div>
      </div>
    );
  }
}
