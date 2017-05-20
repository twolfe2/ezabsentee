import React from 'react';

const SignatureButton = (props) => (
  <div className={props.signatureButton}>
    <button onClick={props.triggerSignature} id="signature-trigger">Add Your Signature</button>
  </div>
);

export default SignatureButton;
