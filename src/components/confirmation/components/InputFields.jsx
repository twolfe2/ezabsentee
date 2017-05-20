import React, { Component } from 'react';

/* MaterialUI Components */
import TextField from 'material-ui/TextField';
import { RadioButton } from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/* Libraries to fill dropdown menus */
import monthsDict from 'months';
import statesDict from 'united-states';
import honorific from 'honorific';

/*  Mapping dropdown menu values  */
const months = monthsDict.map((month, i) =>
  <MenuItem key={i} value={month} primaryText={month} />
);
const states = statesDict.map((state, i) =>
  <MenuItem key={i} value={state.name} primaryText={state.name} />
);
const ethnicitiesDict = 'White,Black or African American,Asian,Native American and Alaska Natives,'
                        + 'Native Hawaiians and Other Pacific Islanders,Two or more races,'
                        + 'Some other race';
const ethnicities = ethnicitiesDict.split(',').map((ethnicity, i) =>
  <MenuItem key={i} value={ethnicity} primaryText={ethnicity} />
);
const titles = honorific.prefixes.map((title, i) =>
  <MenuItem key={i} value={title} primaryText={title} />
);
const suffixes = honorific.suffixes.map((suffix, i) =>
  <MenuItem key={i} value={suffix} primaryText={suffix} />
);

class InputFields extends Component {
  constructor(props) {
    super(props);
    const { previousInfo } = this.props;

    this.state = {
      title: previousInfo.title,
      suff: previousInfo.suff,
      state: previousInfo.state,
      ethnicity: previousInfo.ethnicity,
      firstName: previousInfo.firstName,
      lastName: previousInfo.lastName,
      registeredStreet: previousInfo.registeredStreet,
      registeredAptNum: previousInfo.registeredAptNum,
      registeredCity: previousInfo.registeredCity,
      registeredZipCode: previousInfo.registeredZipCode,
      birthDate: previousInfo.birthDate,
      birthMonth: previousInfo.birthMonth,
      birthYear: previousInfo.birthYear,
      email: previousInfo.email,
      cellPhone: previousInfo.cellPhone,
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSuffix = this.handleSuffix.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.handleEthnicity = this.handleEthnicity.bind(this);
  }

  handleInput(e) {
    const inputVal = e.target.value;
    const inputId = e.target.id;
    this.setState({ [inputId]: inputVal });
    this.props.handleChanges(this.state);
  }

  handleTitle(e, i, val) {
    this.setState({ title: val });
    this.props.handleChanges(this.state);
  }

  handleSuffix(e, i, val) {
    this.setState({ suff: val });
    this.props.handleChanges(this.state);
  }

  handleState(e, i, val) {
    this.setState({ state: val });
    this.props.handleChanges(this.state);
  }

  handleMonth(e, i, val) {
    this.setState({ birthMonth: val });
    this.props.handleChanges(this.state);
  }

  handleEthnicity(e, i, val) {
    this.setState({ ethnicity: val });
    this.props.handleChanges(this.state);
  }

  render() {
    const { title, suff, state, birthMonth, ethnicity } = this.state;
    const { previousInfo } = this.props
    return (
      <div>
        <br /><br /><br />

        <div className="row">
          <div className="col-md-2">
            <SelectField
              floatingLabelText="TITLE"
              floatingLabelFixed={true}
              fullWidth={true}
              defaultValue={previousInfo.title}
              id="title"
              onChange={this.handleTitle}
              value={title}
            >
              {titles}
            </SelectField>
          </div>
          <div className="col-md-4">
            <TextField
              floatingLabelText="FIRST NAME"
              floatingLabelFixed={true}
              fullWidth={true}
              defaultValue={previousInfo.firstName}
              id="firstName"
              onChange={this.handleInput}
            />
          </div>
          <div className="col-md-4">
            <TextField
              floatingLabelText="LAST NAME"
              floatingLabelFixed={true}
              fullWidth={true}
              defaultValue={previousInfo.lastName}
              id="lastName"
              onChange={this.handleInput}
            />
          </div>
          <div className="col-md-2">
            <SelectField
              floatingLabelText="SUFFIX"
              floatingLabelFixed={true}
              fullWidth={true}
              onChange={this.handleSuffix}
              defaultValue={previousInfo.suff}
              value={suff}
            >
              {suffixes}
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
              defaultValue={previousInfo.registeredStreet}
              id="registeredStreet"
              onChange={this.handleInput}
            />
          </div>
          <div className="col-md-2">
            <TextField
              floatingLabelText="APT/UNIT"
              floatingLabelFixed={true}
              fullWidth={true}
              defaultValue={previousInfo.registeredAptNum}
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
              defaultValue={previousInfo.registeredCity}
              id="registeredCity"
              onChange={this.handleInput}
            />
          </div>
          <div className="col-md-2">
            <SelectField
              floatingLabelText="STATE"
              floatingLabelFixed={true}
              fullWidth={true}
              defaultValue={previousInfo.state}
              onChange={this.handleState}
              value={state}
            >
              {states}
            </SelectField>
          </div>
          <div className="col-md-2">
            <TextField
              floatingLabelText="ZIP CODE"
              floatingLabelFixed={true}
              fullWidth={true}
              defaultValue={previousInfo.registeredZipCode}
              id="registeredZipCode"
              onChange={this.handleInput}
            />
          </div>
        </div>

        <br />

        <div className="row">
          <RadioButton
            defaultValue="light"
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
              defaultValue={previousInfo.birthMonth}
              onChange={this.handleMonth}
              value={birthMonth}
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
              defaultValue={previousInfo.birthDate}
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
              defaultValue={previousInfo.birthYear}
              id="birthYear"
              onChange={this.handleInput}
            />
          </div>
          <div className="col-md-4">
            <SelectField
              floatingLabelText="ETHNICITY"
              floatingLabelFixed={true}
              defaultValue={previousInfo.ethnicity}
              onChange={this.handleEthnicity}
              value={ethnicity}
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
              defaultValue={previousInfo.email}
              id="email"
              onChange={this.handleInput}
            />
          </div>
          <div className="col-md-4">
            <TextField
              floatingLabelText="CELL PHONE"
              floatingLabelFixed={true}
              fullWidth={true}
              defaultValue={previousInfo.cellPhone}
              id="cellPhone"
              onChange={this.handleInput}
            />
          </div>
        </div>

        <br /><br /><br /><br /><br />
      </div>
    );
  }
}

export default InputFields;
