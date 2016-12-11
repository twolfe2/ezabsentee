import { combineReducers } from 'redux';
import restaurants from './restaurantReducer';
import input from './inputReducer';
import stepper from './stepper';


const rootReducer = combineReducers({
  restaurants,
  input,
  stepper,
});

export default rootReducer;
