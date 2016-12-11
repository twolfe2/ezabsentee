import React, { Component } from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import { RadioButton } from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Stepper from '../stepper/Stepper';

import monthsDict from 'months';
import statesDict from 'united-states';
import honorific from 'honorific';


const months = monthsDict.map((month, i) => {
  return <MenuItem key={i} value={month} primaryText={month} />;
});

const states = statesDict.map((state, i) => {
  return <MenuItem key={i} value={state.name} primaryText={state.name} />;
});

const ethnicitiesDict = 'White,Black or African American,Asian,Native American and Alaska Natives,'
                        + 'Native Hawaiians and Other Pacific Islanders,Two or more races,'
                        + 'Some other race';
const ethnicities = ethnicitiesDict.split(',').map((ethnicity, i) =>
  <MenuItem key={i} value={ethnicity} primaryText={ethnicity} />
);

const titles = honorific.prefixes.map((title, i) => {
  return <MenuItem key={i} value={title} primaryText={title} />;
});

const suffix = honorific.suffixes.map((suffix, i) => {
  return <MenuItem key={i} value={suffix} primaryText={suffix} />;
});

class HomePage extends Component {

  constructor() {
    super();

    this.state = {
      title: '',
      suff: '',
      state: '',
      month: '',
      ethnicity: '',
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleSuffix = this.handleSuffix.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.handleEthnicity = this.handleEthnicity.bind(this);
  }

  handleTitle(e, i, val) {
    this.setState({ title: val });
  }

  handleSuffix(e, i, val) {
    this.setState({ suff: val });
  }

  handleState(e, i, val) {
    this.setState({ state: val });
  }

  handleMonth(e, i, val) {
    this.setState({ month: val });
  }

  handleEthnicity(e, i, val) {
    this.setState({ ethnicity: val });
  }

  render() {
    const { title, suff, state, month, ethnicity } = this.state;
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
                  name={"title"}
                  id={"title"}
                  floatingLabelText="TITLE"
                  floatingLabelFixed={true}
                  fullWidth={true}
                  onChange={this.handleTitle}
                  value={title}
                  floatingLabelStyle={{
                    color: '#ffffff',
                  }}
                >
                  {titles}
                </SelectField>
              </div>
              <div className="col-md-4">
                <TextField
                  floatingLabelText="FIRST NAME"
                  floatingLabelFixed={true}
                  fullWidth={true}
                  floatingLabelStyle={{
                    color: '#ffffff',
                  }}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  floatingLabelText="LAST NAME"
                  floatingLabelFixed={true}
                  fullWidth={true}
                  floatingLabelStyle={{
                    color: '#ffffff',
                  }}
                />
              </div>
              <div className="col-md-2">
                <SelectField
                  floatingLabelText="SUFFIX"
                  floatingLabelFixed={true}
                  fullWidth={true}
                  value={suff}
                  onChange={this.handleSuffix}
                  floatingLabelStyle={{
                    color: '#ffffff',
                  }}
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
                  floatingLabelStyle={{
                    color: '#ffffff',
                  }}
                />
              </div>
              <div className="col-md-2">
                <TextField
                  floatingLabelText="APT/UNIT"
                  floatingLabelFixed={true}
                  fullWidth={true}
                  floatingLabelStyle={{
                    color: '#ffffff',
                  }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <TextField
                  floatingLabelText="CITY"
                  floatingLabelFixed={true}
                  fullWidth={true}
                  floatingLabelStyle={{
                    color: '#ffffff',
                  }}
                />
              </div>
              <div className="col-md-2">
                <SelectField
                  floatingLabelText="STATE"
                  floatingLabelFixed={true}
                  fullWidth={true}
                  value={state}
                  onChange={this.handleState}
                  floatingLabelStyle={{
                    color: '#ffffff',
                  }}
                >
                  {states}
                </SelectField>
              </div>
              <div className="col-md-2">
                <TextField
                  floatingLabelText="ZIP CODE"
                  floatingLabelFixed={true}
                  fullWidth={true}
                  floatingLabelStyle={{
                    color: '#ffffff',
                  }}
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
                  fullWidth={true}
                  value={month}
                  onChange={this.handleMonth}
                  floatingLabelStyle={{
                    color: '#ffffff',
                  }}
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
                  floatingLabelStyle={{
                    color: '#ffffff',
                  }}
                />
              </div>
              <div className="col-md-2">
                <TextField
                  hintText="XXXX"
                  floatingLabelText="YEAR"
                  floatingLabelFixed={true}
                  fullWidth={true}
                  floatingLabelStyle={{
                    color: '#ffffff',
                  }}
                />
              </div>
              <div className="col-md-4">
                <SelectField
                  floatingLabelText="ETHNICITY"
                  floatingLabelFixed={true}
                  fullWidth={true}
                  value={ethnicity}
                  onChange={this.handleEthnicity}
                  floatingLabelStyle={{
                    color: '#ffffff',
                  }}
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
                  floatingLabelStyle={{
                    color: '#ffffff',
                  }}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  floatingLabelText="CELL PHONE"
                  floatingLabelFixed={true}
                  fullWidth={true}
                  floatingLabelStyle={{
                    color: '#ffffff',
                  }}
                />
              </div>
            </div>

            <br /><br /><br /><br /><br />

          <div className="text-center col-md-offset-5">
            <div className="first-stepper">
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
