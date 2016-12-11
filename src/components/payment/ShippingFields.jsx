 import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class ShippingFields extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let shipping = {
      address1: this.refs.street_address_1.value,
      address2: this.refs.street_address_2.value,
      city: this.refs.city.value,
      state: this.refs.state.value,
      zip: this.refs.zip.value
    }
    this.props.handleChange(shipping)
  }

  render() {
    return (
      <div className='billing-info container'>
        <h3 id='h3billing' className='billing-title'>Billing Address</h3>

        <div className='row'>
          <div className='col-sm-6'>
            <label>Street Address</label>
            <TextField
              type="text"
              id="street_address_1"
              ref="street_address_1"
              placeholder="Address Line 1"
              defaultValue={this.props.shipping.address1}
              onChange={this.handleChange}
            />
          </div>

          <div className='col-sm-6'>
            <label>Apt/unit</label>
            <TextField
              type="text"
              id="street_address_2"
              ref="street_address_2"
              placeholder="Address Line 2"
              defaultValue={this.props.shipping.address2}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-6'>
            <label>City</label>
            <TextField
              type="text"
              id="city"
              ref="city"
              placeholder="City"
              defaultValue={this.props.shipping.city}
              onChange={this.handleChange}
            />
          </div>

          <div className='col-md-4'>
            <label>State</label>
            <br />
            <select
              id="state"
              ref="state"
              defaultValue={this.props.shipping.state}
              onChange={this.handleChange}
            >
              <option value=""></option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>

          <div className='col-sm-6'>
            <label>Zip Code</label>
            <TextField
              type="text"
              id="zip"
              ref="zip"
              placeholder="Zip"
              defaultValue={this.props.shipping.zip}
              onChange={this.handleChange}
            />
          </div>



          <div className='row'>

            <div className='col-md-6 state'>
              <label>State</label>
              <select
                id="state"
                ref="state"
                defaultValue={this.props.shipping.state}
                onChange={this.handleChange}
              >
                <option value=""></option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
