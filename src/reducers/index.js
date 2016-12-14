import { combineReducers } from 'redux';
import input from './inputReducer';
import stepper from './stepper';
import userInfo from './userInfo';


const rootReducer = combineReducers({
  input,
  stepper,
  userInfo,
});

export default rootReducer;
