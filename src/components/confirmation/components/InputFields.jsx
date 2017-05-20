import React, { Component } from 'react';
import { connect } from 'react-redux';

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

    this.state = {
      title: props.values.title,
      suff: props.values.suff,
      state: props.values.state,
      ethnicity: props.values.ethnicity,
      firstName: props.values.firstName,
      lastName: props.values.lastName,
      registeredStreet: props.values.registeredStreet,
      registeredAptNum: props.values.registeredAptNum,
      registeredCity: props.values.registeredCity,
      registeredZipCode: props.values.registeredZipCode,
      birthDate: props.values.birthDate,
      birthMonth: props.values.birthMonth,
      birthYear: props.values.birthYear,
      email: props.values.email,
      cellPhone: props.values.cellPhone,
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
    console.log( 'e: ', e ,  'i: ', i , 'val: ', val);
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
    const { values } = this.props
    return (
      <div>
        <br /><br /><br />

        <div className="row">
          <div className="col-md-2">
            <SelectField
              floatingLabelText="TITLE"
              floatingLabelFixed={true}
              fullWidth={true}
              defaultValue={values.title}
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
              defaultValue={values.firstName}
              id="firstName"
              onChange={this.handleInput}
            />
          </div>
          <div className="col-md-4">
            <TextField
              floatingLabelText="LAST NAME"
              floatingLabelFixed={true}
              fullWidth={true}
              defaultValue={values.lastName}
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
              defaultValue={values.suff}
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
              defaultValue={values.registeredStreet}
              id="registeredStreet"
              onChange={this.handleInput}
            />
          </div>
          <div className="col-md-2">
            <TextField
              floatingLabelText="APT/UNIT"
              floatingLabelFixed={true}
              fullWidth={true}
              defaultValue={values.registeredAptNum}
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
              defaultValue={values.registeredCity}
              id="registeredCity"
              onChange={this.handleInput}
            />
          </div>
          <div className="col-md-2">
            <SelectField
              floatingLabelText="STATE"
              floatingLabelFixed={true}
              fullWidth={true}
              defaultValue={values.state}
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
              defaultValue={values.registeredZipCode}
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
              defaultValue={values.birthMonth}
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
              defaultValue={values.birthDate}
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
              defaultValue={values.birthYear}
              id="birthYear"
              onChange={this.handleInput}
            />
          </div>
          <div className="col-md-4">
            <SelectField
              floatingLabelText="ETHNICITY"
              floatingLabelFixed={true}
              defaultValue={values.ethnicity}
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
              defaultValue={values.email}
              id="email"
              onChange={this.handleInput}
            />
          </div>
          <div className="col-md-4">
            <TextField
              floatingLabelText="CELL PHONE"
              floatingLabelFixed={true}
              fullWidth={true}
              defaultValue={values.cellPhone}
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

const mapDispatchToProps = (dispatch) => ({
  sendUser(info) {
    return dispatch(InputActions.sendUserInfo(info));
  }
});
const mapStateToProps = (state) => ({
  // userInfo: state.userInfo,
});

export default connect(mapStateToProps, mapDispatchToProps)(InputFields);

//
// // const InputFields = (props) => {
//   const { values } = props;
//   return (
//     <div>
//       <br /><br /><br />
//
//       <div className="row">
//         <div className="col-md-2">
//           <SelectField
//             floatingLabelText="TITLE"
//             floatingLabelFixed={true}
//             fullWidth={true}
//             value={values.title}
//           >
//             {titles}
//           </SelectField>
//         </div>
//         <div className="col-md-4">
//           <TextField
//             floatingLabelText="FIRST NAME"
//             floatingLabelFixed={true}
//             fullWidth={true}
//             value={values.firstName}
//           />
//         </div>
//         <div className="col-md-4">
//           <TextField
//             floatingLabelText="LAST NAME"
//             floatingLabelFixed={true}
//             fullWidth={true}
//             value={values.lastName}
//           />
//         </div>
//         <div className="col-md-2">
//           <SelectField
//             floatingLabelText="SUFFIX"
//             floatingLabelFixed={true}
//             fullWidth={true}
//             value={values.suff}
//           >
//             {suffixes}
//           </SelectField>
//         </div>
//       </div>
//
//       <br /><br /><br />
//       <h6 className="text-center">
//         WHERE ARE YOU REGISTERED TO VOTE?
//       </h6>
//
//       <div className="row">
//         <div className="col-md-10">
//           <TextField
//             floatingLabelText="STREET ADDRESS"
//             floatingLabelFixed={true}
//             fullWidth={true}
//             value={values.registeredStreet}
//           />
//         </div>
//         <div className="col-md-2">
//           <TextField
//             floatingLabelText="APT/UNIT"
//             floatingLabelFixed={true}
//             fullWidth={true}
//             value={values.registeredAptNum}
//           />
//         </div>
//       </div>
//
//       <div className="row">
//         <div className="col-md-6">
//           <TextField
//             floatingLabelText="CITY"
//             floatingLabelFixed={true}
//             fullWidth={true}
//             value={values.registeredCity}
//           />
//         </div>
//         <div className="col-md-2">
//           <SelectField
//             floatingLabelText="STATE"
//             floatingLabelFixed={true}
//             fullWidth={true}
//             value={values.state}
//           >
//             {states}
//           </SelectField>
//         </div>
//         <div className="col-md-2">
//           <TextField
//             floatingLabelText="ZIP CODE"
//             floatingLabelFixed={true}
//             fullWidth={true}
//             value={values.registeredZipCode}
//           />
//         </div>
//       </div>
//
//       <br />
//
//       <div className="row">
//         <RadioButton
//           value="light"
//           label="I HAVE A DIFFERENT MAILING ADDRESS"
//         />
//       </div>
//
//       <br /><br /><br />
//       <h6 className="text-center">
//         WHEN WERE YOU BORN?
//       </h6>
//
//       <div className="row">
//         <div className="col-md-4">
//           <SelectField
//             floatingLabelText="MONTH"
//             floatingLabelFixed={true}
//             value={values.birthMonth}
//           >
//             {months}
//           </SelectField>
//         </div>
//         <div className="col-md-2">
//           <TextField
//             hintText="XX"
//             floatingLabelText="DAY"
//             floatingLabelFixed={true}
//             fullWidth={true}
//             value={values.birthDate}
//           />
//         </div>
//         <div className="col-md-2">
//           <TextField
//             hintText="XXXX"
//             floatingLabelText="YEAR"
//             floatingLabelFixed={true}
//             fullWidth={true}
//             value={values.birthYear}
//           />
//         </div>
//         <div className="col-md-4">
//           <SelectField
//             floatingLabelText="ETHNICITY"
//             floatingLabelFixed={true}
//             value={values.ethnicity}
//           >
//             {ethnicities}
//           </SelectField>
//         </div>
//       </div>
//
//       <div className="row">
//         <div className="col-md-4">
//           <TextField
//             floatingLabelText="EMAIL ADDRESS"
//             floatingLabelFixed={true}
//             fullWidth={true}
//             value={values.email}
//           />
//         </div>
//         <div className="col-md-4">
//           <TextField
//             floatingLabelText="CELL PHONE"
//             floatingLabelFixed={true}
//             fullWidth={true}
//             value={values.cellPhone}
//           />
//         </div>
//       </div>
//
//       <br /><br /><br /><br /><br />
//     </div>
//   );
//   // }
// };
//
// export default InputFields;
