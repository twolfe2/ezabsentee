import React, { Component } from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import { RadioButton } from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Stepper from '../stepper/Stepper';

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

const titles = [
  <MenuItem key={1} value={1} primaryText="Never" />,
  <MenuItem key={2} value={2} primaryText="Every Night" />,
  <MenuItem key={3} value={3} primaryText="Weeknights" />,
  <MenuItem key={4} value={4} primaryText="Weekends" />,
  <MenuItem key={5} value={5} primaryText="Weekly" />,
];

const suffix = [
  <MenuItem key={1} value={1} primaryText="Never" />,
  <MenuItem key={2} value={2} primaryText="Every Night" />,
  <MenuItem key={3} value={3} primaryText="Weeknights" />,
  <MenuItem key={4} value={4} primaryText="Weekends" />,
  <MenuItem key={5} value={5} primaryText="Weekly" />,
];

const states = [
  <MenuItem key={1} value={1} primaryText="Never" />,
  <MenuItem key={2} value={2} primaryText="Every Night" />,
  <MenuItem key={3} value={3} primaryText="Weeknights" />,
  <MenuItem key={4} value={4} primaryText="Weekends" />,
  <MenuItem key={5} value={5} primaryText="Weekly" />,
];


class HomePage extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
<div>
      <div>
        <h1>EZ PZ ABZNT</h1>
        <Link to="payment" className="btn btn-primary">See Payment</Link>|
        <Link to="confirmation" className="btn btn-primary">CONFIRMATION</Link>|
        <Link to="dashboard" className="btn btn-primary">See Dashboard</Link>
        </div>
      <div id="homepage-wrapper">
        <div className="container" id="homepage">
          <div id="homepage-banner-wrapper">
            <img id="homepage-banner" src="http://i.imgur.com/VNXUZzq.png" />
          </div>

          <br /><br /><br />

          <div className="row">
            <div className="col-md-2">
              <SelectField
                floatingLabelText="TITLE"
                floatingLabelFixed={true}
                fullWidth={true}
              >
                {titles}
              </SelectField>
            </div>
            <div className="col-md-4">
              <TextField
                floatingLabelText="FIRST NAME"
                floatingLabelFixed={true}
                fullWidth={true}
              />
            </div>
            <div className="col-md-4">
              <TextField
                floatingLabelText="LAST NAME"
                floatingLabelFixed={true}
                fullWidth={true}
              />
            </div>
            <div className="col-md-2">
              <SelectField
                floatingLabelText="SUFFIX"
                floatingLabelFixed={true}
                fullWidth={true}
              >
                {suffix}
              </SelectField>
            </div>
          </div>

          <br /><br /><br />
          <h6 className="text-center">
            WHERE ARE YOU REGISTERED TO VOTE?
          </h6>

          <div className="row">
            <div className="col-md-10">
              <TextField
                floatingLabelText="STREET ADDRESS"
                floatingLabelFixed={true}
                fullWidth={true}
              />
            </div>
            <div className="col-md-2">
              <TextField
                floatingLabelText="APT/UNIT"
                floatingLabelFixed={true}
                fullWidth={true}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <TextField
                floatingLabelText="CITY"
                floatingLabelFixed={true}
                fullWidth={true}
              />
            </div>
            <div className="col-md-2">
              <SelectField
                floatingLabelText="STATE"
                floatingLabelFixed={true}
                fullWidth={true}
              >
                {states}
              </SelectField>
            </div>
            <div className="col-md-2">
              <TextField
                floatingLabelText="ZIP CODE"
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

          <div className="text-center col-md-offset-5">
          <div  className="first-stepper">
            <Stepper step={1} />
          </div>
            <Link to="confirmation" className="common-button">Next</Link>
          </div>
          <br /><br /><br /><br /><br />
          {/* <Link to="about" className="btn btn-primary">See About</Link>|
            <Link to="payment" className="btn btn-primary">See Payment</Link>|
          <Link to="dashboard" className="btn btn-primary">See Dashboard</Link> */}
        </div>

      </div>
      </div>
    );
  }
}

export default HomePage;
