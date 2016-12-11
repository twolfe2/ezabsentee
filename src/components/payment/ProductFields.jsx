import React, { Component } from 'react';

export default class ProductFields extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    let product = {
      charge_amount: this.refs.charge_amount
    }
    this.props.handleChange(product);
  }

  render() {
    // default value is $1 but people can pay more or less
    return (
      <div>
        <label>What would you like to pay?</label>
        <input
          id="charge_amount"
          ref="charge_amount"
          defaultValue="1"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
