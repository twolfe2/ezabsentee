import React from 'react';

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

const InputFields = (props) => {
  const { values } = props;
  return (
    <div>
      <br /><br /><br />

      <div className="row">
        <div className="col-md-2">
          <SelectField
            floatingLabelText="TITLE"
            floatingLabelFixed={true}
            fullWidth={true}
            value={values.title}
          >
            {titles}
          </SelectField>
        </div>
        <div className="col-md-4">
          <TextField
            floatingLabelText="FIRST NAME"
            floatingLabelFixed={true}
            fullWidth={true}
            value={values.firstName}
          />
        </div>
        <div className="col-md-4">
          <TextField
            floatingLabelText="LAST NAME"
            floatingLabelFixed={true}
            fullWidth={true}
            value={values.lastName}
          />
        </div>
        <div className="col-md-2">
          <SelectField
            floatingLabelText="SUFFIX"
            floatingLabelFixed={true}
            fullWidth={true}
            value={values.suff}
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
            value={values.registeredStreet}
          />
        </div>
        <div className="col-md-2">
          <TextField
            floatingLabelText="APT/UNIT"
            floatingLabelFixed={true}
            fullWidth={true}
            value={values.registeredAptNum}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <TextField
            floatingLabelText="CITY"
            floatingLabelFixed={true}
            fullWidth={true}
            value={values.registeredCity}
          />
        </div>
        <div className="col-md-2">
          <SelectField
            floatingLabelText="STATE"
            floatingLabelFixed={true}
            fullWidth={true}
            value={values.state}
          >
            {states}
          </SelectField>
        </div>
        <div className="col-md-2">
          <TextField
            floatingLabelText="ZIP CODE"
            floatingLabelFixed={true}
            fullWidth={true}
            value={values.registeredZipCode}
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
            value={values.birthMonth}
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
            value={values.birthDate}
          />
        </div>
        <div className="col-md-2">
          <TextField
            hintText="XXXX"
            floatingLabelText="YEAR"
            floatingLabelFixed={true}
            fullWidth={true}
            value={values.birthYear}
          />
        </div>
        <div className="col-md-4">
          <SelectField
            floatingLabelText="ETHNICITY"
            floatingLabelFixed={true}
            value={values.ethnicity}
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
            value={values.email}
          />
        </div>
        <div className="col-md-4">
          <TextField
            floatingLabelText="CELL PHONE"
            floatingLabelFixed={true}
            fullWidth={true}
            value={values.cellPhone}
          />
        </div>
      </div>

      <br /><br /><br /><br /><br />
    </div>
  );
  // }
};

export default InputFields;
