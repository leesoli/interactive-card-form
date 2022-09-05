import FormInput from './FormInput';
import { useState } from 'react';

export default function Form ({formData, updateForm, checkFormCompletion, formCompleted, displayMessage}) {
  const [displayErrorMessages, setDisplayErrorMessages] = useState(false);
  const nameErrorMessage = displayMessage("name");
  const cardNumberErrorMessage = displayMessage("cardNumber");
  const monthErrorMessage = displayMessage("month");
  const yearErrorMessage = displayMessage("year");
  const cvcErrorMessage = displayMessage("cvc");

  function handleSubmit(e) {
    e.preventDefault();
    setDisplayErrorMessages(true);
    checkFormCompletion();
  }

  return (
    <div className="flex text-lg">
      {formCompleted ?
      <div>Form Complete!</div> :
      <form onSubmit={handleSubmit} className="flex flex-col h-full w-full">
        <label className="flex flex-col">
          CARDHOLDER NAME
          <FormInput
            hasError={nameErrorMessage}
            fieldName="name"
            formData={formData}
            updateForm={updateForm}
            displayErrorMessages={displayErrorMessages}/>
          {displayErrorMessages && <div>{nameErrorMessage}</div>}
        </label>
        <label className="flex flex-col">
          CARD NUMBER
          <FormInput
            hasError={cardNumberErrorMessage}
            fieldName="cardNumber"
            formData={formData}
            updateForm={updateForm}
            displayErrorMessages={displayErrorMessages}/>
          {displayErrorMessages && <div className="text-red-800">{cardNumberErrorMessage}</div>}
        </label>
        <div className="flex justify-between w-full">
          <label className="flex flex-col w-1/2">
            EXP. DATE (MM/YY)
            <div className="flex w-full justify-between">
              {(monthErrorMessage && displayErrorMessages) ?
              <input
                className="w-1/2 border-2 border-red-800"
                onChange={updateForm}
                type="text"
                name="month"
                value={formData.month}
                placeholder="MM"/>:
              <input
                className="w-1/2"
                onChange={updateForm}
                type="text"
                name="month"
                value={formData.month}
                placeholder="MM"/>}
              {(yearErrorMessage && displayErrorMessages) ?
              <input
                className="w-1/2 border-2 border-red-800"
                onChange={updateForm}
                type="text"
                name="year"
                value={formData.year}
                placeholder="YY"/>:
              <input
                className="w-1/2"
                onChange={updateForm}
                type="text"
                name="year"
                value={formData.year}
                placeholder="YY"/>}
              {displayErrorMessages && <div>{monthErrorMessage || yearErrorMessage}</div>}
            </div>
          </label>
          <label className="flex flex-col w-1/2">
            CVC
            <FormInput
              hasError={cvcErrorMessage}
              fieldName="cvc"
              formData={formData}
              updateForm={updateForm}
              displayErrorMessages={displayErrorMessages}/>
            {displayErrorMessages && <div>{cvcErrorMessage}</div>}
          </label>
        </div>
        <button className="bg-purple-800 text-white py-2 rounded-lg">Confirm</button>
      </form>}
    </div>
  )
}