import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import { Link } from 'react-router';
import Animation1 from './Animation1';

const styles = {
  backdrop: {
    backgroundImage: 'linear-gradient(156deg, #f39855, #b681f8)',
    height: '100vh',
    width: '100vw',
  },
};

class Animation3 extends Component {

  render() {
    return (
      <div className="animation1">
        <Animation1 />
      </div>
    );
  }
}

export default Animation3;
