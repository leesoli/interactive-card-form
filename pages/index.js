import Form from '../components/Form.js';
import {useState} from 'react';

export default function Homepage() {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    month: '',
    year: '',
    cvc: ''
  })

  function updateForm(e) {
    const {name, value} = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <div>
      <section className="bg-purple-900 h-80">
        <div className="absolute bg-purple-300 w-96 h-1/4 rounded-md p-6 flex flex-col justify-between bg-gradient-to-br from-[#6448fe] via-pink-500 to-[#600594]">
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
      </section>
      <section>
        <Form formData={formData} updateForm={updateForm}/>
      </section>
    </div>
  )
}