import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RouteTransition } from 'react-router-transition';
import { Grid } from 'react-flexbox-grid';
import spring from 'react-motion/lib/spring';

import injectTapEventPlugin from 'react-tap-event-plugin';

const fadeConfig = { stiffness: 220, damping: 22 };

const fade = {
  atEnter: {
    opacity: 0.5,
  },
  atLeave: {
    opacity: spring(0, fadeConfig),
  },
  atActive: {
    opacity: spring(1, fadeConfig),
  },
};

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="container">
      <RouteTransition
        pathname={this.props.location.pathname}
        {...fade}
        >
          <MuiThemeProvider>
            <Grid>
              {this.props.children}
            </Grid>
          </MuiThemeProvider>
        </RouteTransition>
      </div>

    );
  }

}
App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
