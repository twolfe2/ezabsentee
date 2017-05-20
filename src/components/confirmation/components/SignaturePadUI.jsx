import React from 'react';

const SignaturePadUI = (props) => {
  return (
    <div>
      <button className="signature-exit" onClick={props.exitSignatureField}>X</button>
      <button className="signature-clear" onClick={props.clearSignatureField}>Erase</button>
      <button className="signature-submit" onClick={props.submitSignature}>O</button>
    </div>
  );
};

export default SignaturePadUI;
