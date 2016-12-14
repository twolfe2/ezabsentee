import * as types from '../actions/actionTypes';

const initialState = {
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

export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case types.SEND_USER_INFO:
      return action.info;
    default:
      return initialState;
  }
}
