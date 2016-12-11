import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

import { Link } from 'react-router';

const styles = {
  backdrop: {
    backgroundImage: 'linear-gradient(156deg, #f39855, #b681f8)',
    height: '100vh',
    width: '100vw',
  },
};

class Animation1 extends Component {

  render() {
    return (
      <div>
        <h1>Animation 1</h1>
        <Link to='animation2'>Animation2</Link>
      </div>
    );
  }
}

export default Animation1;
