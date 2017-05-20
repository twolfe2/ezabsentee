# John Son's Code Sample for Project EZAbsentee
Built the confirmation page where the user is asked to verify their personal details.
The user then adds their electronic signature, confirms, and then proceeds to the payment page.

## Page View
<img src="http://i.imgur.com/StYDaYa.png" />
<img src="http://i.imgur.com/KhXDrvy.png" />

## Container Breakdown
All control and data fetching logic exists in the `ConfimationPage.jsx` file of this directory. For clarification I will be breaking down what each 'dumb'/presentational component represents in the `render()` function of our container `ConfimationPage.jsx`. Purpose of splitting the container from its presentational
components is mainly for reusability (i.e. a form) and simplicity/readability.

###### InputFields
`InputFields` is all of the text input fields that we see in the view. We are passing down
the user inputs, `userInfo`, from the previous page (persisted through our Redux store) via props as
`values`. Code for this component can be seen in the components folder as `InputFields.jsx`.
```javascript
<div id="confirmation-page">
  <h2 className="confirmation-title">CONFIRM & SIGN</h2>
  <p className="review-message">Review the details of your application, and sign below</p>
  <div className="view-text-container">
    <h4 className="view-text">View PDF of Application</h4>
  </div>

  <InputFields values={userInfo} />
```

###### SignatureButton
`SignatureButton` is the 'Add Your Signature' button seen in the view. This dumb component
is simply a button that will trigger a UI state change which will either show this button
or the electronic signature pad. Code for this component can be seen in the components folder as `SignatureButton.jsx`.
```javascript
<SignatureButton
  signatureButton={signatureButton}
  triggerSignature={this.triggerSignature}
/>
```

###### SignaturePad
`SignaturePad` is NPM package that provides a HTML5 canvas for signature drawing (*CURRENTLY BROKEN*). `SignaturePadUI` are the UI controls for clearing, closing, and submitting the electronic signature to the Redux store.

```javascript
<div className={signatureTrigger}>
  <SignaturePad className="signature-pad" ref={(c) => { this.signaturePad = c; }} />
  <SignaturePadUI
    exitSignatureField={this.exitSignatureField}
    clearSignatureField={this.clearSignatureField}
    submitSignature={this.submitSignature}
  />
</div>
```

###### SignatureDialog
`SignatureDialog` is a modal component that will open if the canvas is empty (line 59 `const empty = signaturePadObj.isEmpty();`) via `submitSignature`. A message 'Please sign before submitting' will show to the user. Code for this component can be seen in the components folder as `SignatureDialog.jsx`.
```javascript
<SignatureDialog
  open={dialogOpen}
  closeDialog={this.handleClose}
/>
```

###### NextStep
This component contains the stepper (representative of where the user is in the routes) and
a 'Next' button that will take us to the Payments Page. Code for this component can be seen in the components folder as `NextStep.jsx`.
```javascript
<NextStep />
```
