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
Breaking down what each component represents in the render function of our container.

`InputFields` is all of the text input fields that we see in the view. We are passing down
the user inputs `userInfo` from the previous page (persisted through our Redux store) via props as
`values`. Code for this is in the components folder as `InputFields.jsx`. 
```javascript
<div id="confirmation-page">
  <h2 className="confirmation-title">CONFIRM & SIGN</h2>
  <p className="review-message">Review the details of your application, and sign below</p>
  <div className="view-text-container">
    <h4 className="view-text">View PDF of Application</h4>
  </div>

  <InputFields values={userInfo} />
```

```javascript
<SignatureButton
  signatureButton={signatureButton}
  triggerSignature={this.triggerSignature}
/>
```

```javascript
<SignatureButton
  signatureButton={signatureButton}
  triggerSignature={this.triggerSignature}
/>
```
This component contains the stepper (representative of where the user is in routes) and
a 'Next' button that will take us to the Payments Page.
```javascript
<NextStep />
```
