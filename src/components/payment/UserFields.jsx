import React, { Component } from 'react';

export default class UserFields extends Component {
  handleChange(e) {
    let user = {
      name: this.refs.name.value,
      email: this.refs.email.value
    }
    this.props.handleChange(user)
  }

  render() {
    return (
      <div>
        <label>Name</label>
        <input
          type="text"
          id="name"
          ref="name"
          placeholder="Name"
          defaultValue={this.props.user.name}
          onChange={this.handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          id="email"
          ref="email"
          placeholder="Email"
          defaultValue={this.props.user.email}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
