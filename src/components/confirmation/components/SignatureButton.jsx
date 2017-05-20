import React from 'react';

const SignatureButton = (props) => {
  return (
    <div>
      <div className={props.signatureButton}>
        <button onClick={props.triggerSignature} id="signature-trigger">Add Your Signature</button>
      </div>
    </div>
  );
};

export default SignatureButton;
