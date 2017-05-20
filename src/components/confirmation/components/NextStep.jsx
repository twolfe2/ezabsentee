import React from 'react';

import { Link } from 'react-router';
import Stepper from '../../stepper/Stepper';

const NextStep = (props) => (
  <div className="text-center col-md-12">
    <div className="first-stepper" id="submit" >
      <Stepper step={2} />
    </div>
    <Link
      to="payment"
      className="common-button"
      onClick={props.sendUpdates(props.userInfo)}
    >Next</Link>
  </div>
);

export default NextStep;
