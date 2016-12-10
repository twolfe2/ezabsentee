import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>EZ PZ ABZNT</h1>
        <Link to="about" className="btn btn-primary">See About</Link>|
        <Link to="payment" className="btn btn-primary">See Payment</Link>|
        <Link to="confirmation" className="btn btn-primary">CONFIRMATION</Link>|
        <Link to="dashboard" className="btn btn-primary">See Dashboard</Link>
      </div>
    );
  }
}

export default HomePage;
