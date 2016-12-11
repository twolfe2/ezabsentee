import React, { Component } from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import { RadioButton } from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const months = [
  <MenuItem key={1} value={1} primaryText="Never" />,
  <MenuItem key={2} value={2} primaryText="Every Night" />,
  <MenuItem key={3} value={3} primaryText="Weeknights" />,
  <MenuItem key={4} value={4} primaryText="Weekends" />,
  <MenuItem key={5} value={5} primaryText="Weekly" />,
];

const ethnicities = [
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
          ONE STOP ABSENTEE REGISTRATION, FOR JUST A COUPLE BUCKS
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
              floatingLabelText="MONTH"
              floatingLabelFixed={true}
            >
              {months}
            </SelectField>
          </div>
          <div className="col-md-2">
            <TextField
              hintText="XX"
              floatingLabelText="DAY"
              floatingLabelFixed={true}
              fullWidth={true}
            />
          </div>
          <div className="col-md-2">
            <TextField
              hintText="XXXX"
              floatingLabelText="YEAR"
              floatingLabelFixed={true}
              fullWidth={true}
            />
          </div>
          <div className="col-md-4">
            <SelectField
              floatingLabelText="ETHNICITY"
              floatingLabelFixed={true}
            >
              {ethnicities}
            </SelectField>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <TextField
              floatingLabelText="EMAIL ADDRESS"
              floatingLabelFixed={true}
              fullWidth={true}
            />
          </div>
          <div className="col-md-4">
            <TextField
              floatingLabelText="CELL PHONE"
              floatingLabelFixed={true}
              fullWidth={true}
            />
          </div>
        </div>

        <br /><br /><br /><br /><br />

        <div className="text-center">
          <button>
            Continue
          </button>
        </div>
        {/* <Link to="about" className="btn btn-primary">See About</Link>|
          <Link to="payment" className="btn btn-primary">See Payment</Link>|
        <Link to="dashboard" className="btn btn-primary">See Dashboard</Link> */}
      </div>
    );
  }
}

export default HomePage;
