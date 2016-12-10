import React, { Component } from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import { RadioButton } from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [
  <MenuItem key={1} value={1} primaryText="Never" />,
  <MenuItem key={2} value={2} primaryText="Every Night" />,
  <MenuItem key={3} value={3} primaryText="Weeknights" />,
  <MenuItem key={4} value={4} primaryText="Weekends" />,
  <MenuItem key={5} value={5} primaryText="Weekly" />,
];

class HomePage extends Component {
  render() {
    return (
      <div className="container" id="landing">
        <h1 className="text-center">Easy Absentee</h1>
        <div className="text-center">
          Don’t want to go to the post office? We take care of your absentee ballot
          <br />from start to finish, and for just a buck.
          <br /><br />
          eezy peezy absentee-zy
        </div>

        <br /><br /><br />

        <div className="row">
          <div className="col-md-2">
            <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
              floatingLabelFixed={true}
              fullWidth={true}
            />
          </div>
          <div className="col-md-4">
            <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
              floatingLabelFixed={true}
              fullWidth={true}
            />
          </div>
          <div className="col-md-4">
            <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
              floatingLabelFixed={true}
              fullWidth={true}
            />
          </div>
          <div className="col-md-2">
            <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
              floatingLabelFixed={true}
              fullWidth={true}
            />
          </div>
        </div>

        <br /><br /><br />
        <h6 className="text-center">
          WHERE ARE YOU REGISTERED TO VOTE?
        </h6>

        <div className="row">
          <div className="col-md-10">
            <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
              floatingLabelFixed={true}
              fullWidth={true}
            />
          </div>
          <div className="col-md-2">
            <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
              floatingLabelFixed={true}
              fullWidth={true}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
              floatingLabelFixed={true}
              fullWidth={true}
            />
          </div>
          <div className="col-md-2">
            <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
              floatingLabelFixed={true}
              fullWidth={true}
            />
          </div>
          <div className="col-md-2">
            <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
              floatingLabelFixed={true}
              fullWidth={true}
            />
          </div>
        </div>

        <br />

        <div className="row">
          <RadioButton
            value="light"
            label="I HAVE A DIFFERENT MAILING ADDRESS"
          />
        </div>

        <br /><br /><br />
        <h6 className="text-center">
          WHEN WERE YOU BORN?
        </h6>

        <div className="row">
          <div className="col-md-4">
            <SelectField
              floatingLabelText="Floating Label Text"
              floatingLabelFixed={true}
              hintText="Hint text"
            >
              {items}
            </SelectField>
          </div>
          <div className="col-md-2">
            <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
              floatingLabelFixed={true}
              fullWidth={true}
            />
          </div>
          <div className="col-md-2">
            <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
              floatingLabelFixed={true}
              fullWidth={true}
            />
          </div>
          <div className="col-md-4">
            <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
              floatingLabelFixed={true}
              fullWidth={true}
            />
          </div>
        </div>
        {/* <Link to="about" className="btn btn-primary">See About</Link>|
          <Link to="payment" className="btn btn-primary">See Payment</Link>|
        <Link to="dashboard" className="btn btn-primary">See Dashboard</Link> */}
      </div>
    );
  }
}

export default HomePage;
