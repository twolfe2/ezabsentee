<div id="confirmation-page">
  <h2 className="confirmation-title">CONFIRM & SIGN</h2>
  <p className="review-message">Review the details of your application, and sign below</p>
  <div className="view-text-container">
    <h4 className="view-text">View PDF of Application</h4>
  </div>

  {/* Passing down user filled input data (from Redux store) down to its child */}
  <InputFields values={userInfo} />

  Two divs that alternate
  <div className={signatureTrigger}>
    <SignaturePad className="signature-pad" ref={(c) => { this.signaturePad = c; }} />
    <button className="signature-exit" onClick={this.exitSignatureField}>X</button>
    <button className="signature-clear" onClick={this.clearSignatureField}>Erase</button>
    <button className="signature-submit" onClick={this.submitSignature}>O</button>
  </div>
  <div className={signatureButton}>
    <button onClick={this.triggerSignature} id="signature-trigger">Add Your Signature</button>
  </div>

  <SignatureDialog
    open={dialogOpen}
    closeDialog={this.handleClose}
  />
  <div className="text-center col-md-12">
    <div className="first-stepper" id="submit" >
      <Stepper step={2} />
    </div>
    <Link
      to="payment"
      className="common-button"
    >Next</Link>
  </div>
</div>
