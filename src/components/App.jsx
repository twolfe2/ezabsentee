import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid } from 'react-flexbox-grid';
import Header from './common/header';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


class App extends Component {
  render() {
    return (
      <div className="container">
        <MuiThemeProvider>
          <Grid>
            <Header />
            {this.props.children}
          </Grid>
        </MuiThemeProvider>
      </div>

    );
  }

}
App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
