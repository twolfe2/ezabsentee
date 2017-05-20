# John Son's Code Sample for Project EZAbsentee
Built the confirmation page (2nd View) where the user is asked to verify their personal details.
The user then adds their electronic signature, confirms, and then proceeds to the payment page.

## Page View
<img src="http://i.imgur.com/StYDaYa.png" />
<img src="http://i.imgur.com/KhXDrvy.png" />

## Running the Application
1. `$ git clone https://github.com/twolfe2/ezabsentee`
2. `$ npm install`
3. `$ npm start`

## Container Breakdown
All UI control, data fetching and data sending logic exists in the [`ConfirmationPage.jsx`](https://github.com/twolfe2/ezabsentee/blob/master/src/components/confirmation/ConfirmationPage.jsx) file of this directory. Comments are provided explaining the imports and methods for this container. For the container's `render()` method, each 'dumb'/presentational component of [`ConfirmationPage.jsx`](https://github.com/twolfe2/ezabsentee/blob/master/src/components/confirmation/ConfirmationPage.jsx) will be broken down below for further clarification. The purpose of splitting/modularizing the container from its presentational
components is to promote reusability (i.e. a form) and to pursue simplicity and readability.

##### [InputFields](https://github.com/twolfe2/ezabsentee/blob/master/src/components/confirmation/components/InputFields.jsx)
`InputFields` is the component holding all of the text input fields that we see in the view. We pass down the previous state of the user inputs, `userInfo`, to pre-populate our form as the prop `previousInfo`. We also pass down our container method, `handleInputFieldsChanges (line 49)` as a handler for any text input changes as the prop `handleChanges`. This way we can pass our edits 'back up' to our container, where the updates will be ready to be dispatched to the store. Code for this component can be seen in the components folder as [`InputFields.jsx`](https://github.com/twolfe2/ezabsentee/blob/master/src/components/confirmation/components/InputFields.jsx).
```javascript
<div id="confirmation-page">
  <h2 className="confirmation-title">CONFIRM & SIGN</h2>
  <p className="review-message">Review the details of your application, and sign below</p>
  <div className="view-text-container">
    <h4 className="view-text">View PDF of Application</h4>
  </div>

  <InputFields previousInfo={userInfo} handleChanges={this.handleInputFieldsChanges} />
```

##### [SignatureButton](https://github.com/twolfe2/ezabsentee/blob/master/src/components/confirmation/components/SignatureButton.jsx)
`SignatureButton` is the 'Add Your Signature' button seen in the view. This dumb component
is simply a button that will trigger a UI state change which will either show the button
or the electronic signature pad. Code for this component can be seen in the components folder as [`SignatureButton.jsx`](https://github.com/twolfe2/ezabsentee/blob/master/src/components/confirmation/components/SignatureButton.jsx).
```javascript
<SignatureButton
  signatureButton={signatureButton}
  triggerSignature={this.triggerSignature}
/>
```

##### SignaturePad && [SignaturePadUI](https://github.com/twolfe2/ezabsentee/blob/master/src/components/confirmation/components/SignaturePadUI.jsx)
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

##### [SignatureDialog](https://github.com/twolfe2/ezabsentee/blob/master/src/components/confirmation/components/SignatureDialog.jsx)
`SignatureDialog` is a modal component that will trigger if the canvas is empty (line 76 `const isCanvasEmpty = signaturePadObj.isEmpty();`) via the container method `submitSignature`. A modal will open with the message 'Please sign before submitting', if submitting a blank canvas as a signature. Code for this component can be seen in the components folder as [`SignatureDialog.jsx`](https://github.com/twolfe2/ezabsentee/blob/master/src/components/confirmation/components/SignatureDialog.jsx).
```javascript
<SignatureDialog
  open={dialogOpen}
  closeDialog={this.handleClose}
/>
```

##### [NextStep](https://github.com/twolfe2/ezabsentee/blob/master/src/components/confirmation/components/NextStep.jsx)
This component is comprised of a stepper (a navigator representative of where the user is in the routes) and
a 'Next' button that will do two things:
1. Send the user to the next container/page, PaymentPage.
2. Send the updated user information to the Redux store with the use of the container method `sendUpdates` and the updated form values `updatedUserInfo`.
Code for this component can be seen in the components folder as [`NextStep.jsx`](https://github.com/twolfe2/ezabsentee/blob/master/src/components/confirmation/components/NextStep.jsx).
```javascript
<NextStep sendUpdates={this.sendUpdates} userInfo={updatedUserInfo} />
```
