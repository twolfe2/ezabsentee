import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import InputActions from '../../actions/inputActions'

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

//  TODO: Create form for seperate mailing address
class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      suff: '',
      state: '',
      ethnicity: '',
      firstName: '',
      lastName: '',
      registeredStreet: '',
      registeredAptNum: 'N/A',
      registeredCity: '',
      registeredZipCode: '',
      birthDate: '',
      birthMonth: '',
      birthYear: '',
      email: '',
      cellPhone: '',
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSuffix = this.handleSuffix.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.handleEthnicity = this.handleEthnicity.bind(this);
    this.sendUserInfo = this.sendUserInfo.bind(this);
  }

  handleInput(e, i, val) {
    const inputVal = e.target.value;
    const inputId = e.target.id;
    this.setState({ [inputId]: inputVal });
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
    this.setState({ birthMonth: val });
  }

  handleEthnicity(e, i, val) {
    this.setState({ ethnicity: val });
  }

  sendUserInfo(info) {
    this.props.sendUser(info);
  }

  render() {
    const { title, suff, state, birthMonth, ethnicity } = this.state;
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
                  name="title"
                  id="title"
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
                  id="firstName"
                  onChange={this.handleInput}
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
                  id="lastName"
                  onChange={this.handleInput}
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
                  id="registeredStreet"
                  onChange={this.handleInput}
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
                  id="registeredAptNum"
                  onChange={this.handleInput}
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
                  id="registeredCity"
                  onChange={this.handleInput}
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
                  id="registeredZipCode"
                  onChange={this.handleInput}
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
                  value={birthMonth}
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
                  id="birthDate"
                  onChange={this.handleInput}
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
                  id="birthYear"
                  onChange={this.handleInput}
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
                  id="email"
                  onChange={this.handleInput}
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
                  id="cellPhone"
                  onChange={this.handleInput}
                />
              </div>
            </div>

            <br /><br /><br /><br /><br />

          <div className="text-center col-md-offset-5">
            <div className="first-stepper">
              <Stepper step={1} />
            </div>
            <Link
              to="confirmation"
              className="common-button"
              onClick={this.sendUserInfo(this.state)}
            >Next</Link>
          </div>
          <br /><br /><br /><br /><br />
        </div>
      </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendUser(info) {
    return dispatch(InputActions.sendUserInfo(info));
  }
});
const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
