import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>React Boiler</h1>
        <Link to="about" className="btn btn-primary">See About</Link>|
        <Link to="payment" className="btn btn-primary">See Payment</Link>|
        <Link to="animation1" className="btn btn-primary">Test animation 1</Link>|
        <Link to="animation2" className="btn btn-primary">Test animation 2</Link>
      </div>
    );
  }
}

export default HomePage;
