import Form from '../components/Form.js';
import {useState} from 'react';

export default function Homepage() {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    month: '',
    year: '',
    cvc: ''
  });
  const [formCompleted, setFormCompleted] = useState(false);

  function checkFormCompletion() {
    const keys = Object.keys(formData);
    for (let i = 0; i < keys.length; i++) {
      if (displayMessage(keys[i])) {
        return;
      }
    }
    setFormCompleted(true);
  }

  function updateForm(e) {
    const {name, value} = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  function displayMessage(inputField) {
    const inputValue = formData[inputField];

    if (!inputValue) {
      return 'Can\'t be blank';
    }
    if (inputValue.match(/[A-Z]/gi) && inputField !== 'name') {
      return 'Wrong format, numbers only';
    }
    if (inputValue.match(/\d/gi) && inputField === 'name') {
      return 'Wrong format, letters only';
    }
    if (inputField === 'cardNumber' && inputValue.length !== 16) {
      return 'Not correct length';
    }
    if ((inputField === 'month' || inputField === 'year') && inputValue.length !== 2) {
      return 'Not correct length';
    }
    if (inputField === 'month' && inputValue > 12) {
      return 'Insert correct month';
    }
    if (inputField === 'cvc' && inputValue.length !== 3) {
      return 'Not correct length';
    }
  }

  return (
    <div className="flex flex-col md:flex-row md:h-screen">
      <section className="bg-purple-900 h-80 md:h-full">
        <div className="relative w-96 h-2/3 bg-gray-100 left-20 top-12 bottom-0 rounded-md pt-4 flex flex-col justify-between md:h-52 md:top-1/2 md:left-48">
          <div className="bg-gray-800 h-12"></div>
          <div className="pr-4 rounded-sm items-center bg-gray-300 flex w-10/12 justify-end h-8 text-white mx-auto mb-auto mt-8">{formData.cvc? formData.cvc: 'OOO'}</div>

          <div className="absolute bg-purple-300 w-96 h-full rounded-md p-6 flex flex-col justify-between bg-gradient-to-br from-[#6448fe] via-pink-500 to-[#600594] z-10 right-12 top-28 bottom-0 md:top-[-15em] md:right-24 z-0">
            <div className="flex items-center w-16 justify-between">
              <div className="bg-white w-8 rounded-full h-8"></div>
              <div className="bg-none w-4 rounded-full h-4 border-2"></div>
            </div>

            <div className="mt-auto mb-4 text-xl text-white tracking-widest">{formData.cardNumber? formData.cardNumber.match(/.{1,4}/g).join(' '): '0000000000000000'.match(/.{1,4}/g).join(' ')}</div>

            <div className="flex justify-between">
              <div className="text-white tracking-wider">{formData.name? formData.name: 'JANE APPLESEED'}</div>
              <div className="text-white tracking-wider">{(formData.month && formData.year)? `${formData.month}/${formData.year}`: '00/00'}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-32 px-12 md:flex md:mt-0 md:items-center md:w-1/3 md:ml-48 md:mx-auto">
        <Form
          formData={formData}
          updateForm={updateForm}
          checkFormCompletion={checkFormCompletion} displayMessage={displayMessage}
          formCompleted={formCompleted}/>
      </section>
    </div>
  )
}