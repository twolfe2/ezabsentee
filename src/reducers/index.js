import { combineReducers } from 'redux';
import input from './inputReducer';
import stepper from './stepper';


const rootReducer = combineReducers({
  input,
  stepper,
});

export default rootReducer;
