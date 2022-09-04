import FormInput from './FormInput';
import { useState } from 'react';

export default function Form ({formData, updateForm, clearForm, checkFormCompletion, formCompleted, displayMessage}) {
  const [displayErrorMessages, setDisplayErrorMessages] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setDisplayErrorMessages(true);
    checkFormCompletion();
  }

  return (
    <div className="flex text-lg">
      {formCompleted? <div>Form Complete!</div> :
      <form onSubmit={handleSubmit} className="flex flex-col h-full w-full">
        <label className="flex flex-col">
          CARDHOLDER NAME
          <FormInput fieldName="name" formData={formData} updateForm={updateForm}/>
          {displayErrorMessages && <div>{displayMessage("name")}</div>}
        </label>
        <label className="flex flex-col">
          CARD NUMBER
          <FormInput fieldName="cardNumber" formData={formData} updateForm={updateForm}/>
          {displayErrorMessages && <div className="text-red-800">{displayMessage("cardNumber")}</div>}
        </label>
        <div className="flex justify-between w-full">
          <label className="flex flex-col w-1/2">
            EXP. DATE (MM/YY)
            <div className="flex w-full justify-between">
              <input className="w-1/2" onChange={updateForm} type="text" name="month" value={formData.month} placeholder="MM"/>
              <input className="w-1/2" onChange={updateForm} type="text" name="year" value={formData.year} placeholder="YY"/>
              {displayErrorMessages && <div>{displayMessage("month") || displayMessage("year")}</div>}
            </div>
          </label>
          <label className="flex flex-col w-1/2">
            CVC
            <FormInput fieldName="cvc" formData={formData} updateForm={updateForm}/>
            {displayErrorMessages && <div>{displayMessage("cvc")}</div>}
          </label>
        </div>
        <button className="bg-purple-800 text-white py-2 rounded-lg">Confirm</button>
      </form>
      }
    </div>
  )
}