export default function Form ({formData, updateForm}) {
  return (
    <div>
      <form>
        <label>
          Cardholder name
          <input onChange={updateForm} type="text" name="name" value={formData.name} placeholder="e.g. Jane Appleseed"/>
        </label>
        <label>
          Card number
          <input onChange={updateForm} type="text" name="cardNumber" value={formData.cardNumber} placeholder="e.g. 1234 5678 9123 0000"/>
        </label>
        <div>
          <label>
            EXP. DATE (MM/YY)
            <input onChange={updateForm} type="text" name="month" value={formData.month} placeholder="MM"/>

            <input onChange={updateForm} type="text" name="year" value={formData.year} placeholder="YY"/>
          </label>
          <label>
            CVC
            <input onChange={updateForm} type="text" name="cvc" value={formData.cvc} placeholder="e.g. 123"/>
          </label>
        </div>
        <button>Confirm</button>
      </form>
    </div>
  )
}