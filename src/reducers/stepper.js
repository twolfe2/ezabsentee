import * as types from '../actions/actionTypes';

export default function inputReducer(state = { step: 1 }, action) {
  switch (action.type) {
    case types.SET_STEP:
      return Object.assign({}, state, { step: action.step });
    default:
      return state;
  }
}
