# John Son's Code Sample for Project EZAbsentee
Built the confirmation page where the user is asked to verify their personal details.
The user then adds their electronic signature, confirms, and then proceeds to the payment page.

## Tech used:
1. Twitter Bootstrap for mobile responsive grid.
2. MaterialUI for text input components.
3. Redux store to bring in user persisted data to pre-fill the forms.

## Page View
<img src="http://i.imgur.com/StYDaYa.png" />
<img src="http://i.imgur.com/KhXDrvy.png" />

## Container Breakdown 
```javascript
<div id="confirmation-page">
  <h2 className="confirmation-title">CONFIRM & SIGN</h2>
  <p className="review-message">Review the details of your application, and sign below</p>
  <div className="view-text-container">
    <h4 className="view-text">View PDF of Application</h4>
  </div>

  <InputFields values={userInfo} />
```
  Two divs that alternate
```javascript
  <div className={signatureTrigger}>
    <SignaturePad className="signature-pad" ref={(c) => { this.signaturePad = c; }} />
    <button className="signature-exit" onClick={this.exitSignatureField}>X</button>
    <button className="signature-clear" onClick={this.clearSignatureField}>Erase</button>
    <button className="signature-submit" onClick={this.submitSignature}>O</button>
  </div>
  <div className={signatureButton}>
    <button onClick={this.triggerSignature} id="signature-trigger">Add Your Signature</button>
  </div>
```
```javascript
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
```
