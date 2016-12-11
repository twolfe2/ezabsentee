import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class UserFields extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let user = {
      name: this.refs.name.value,
      email: this.refs.email.value
    }
    this.props.handleChange(user)
  }

  render() {
    return (
      <div className='user-info container'>
        <div className='row'>
          <div className='col-sm-4'>
            <label>Name on card</label>
            <TextField
              type="text"
              id="name"
              ref="name"
              placeholder="Name"
              defaultValue={this.props.user.name}
              onChange={this.handleChange}
            />
          </div>

          <div className='col-sm-4'>
            <label>Email</label>
            <TextField
              type="email"
              id="email"
              ref="email"
              placeholder="Email"
              defaultValue={this.props.user.email}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
