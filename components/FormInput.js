export default function FormInput({fieldName, formData, updateForm}) {

  function findPlaceHolder() {
    if (fieldName === "name") {
      return 'e.g. Jane Appleseed'
    } else if (fieldName === "cardNumber") {
      return 'e.g. 1234 5678 9123 0000'
    } else if (fieldName === 'cvc') {
      return 'e.g. 123'
    }
  }

  return (
    <div>
       <input className="" onChange={updateForm} type="text" name={fieldName} value={formData[fieldName]} placeholder={findPlaceHolder()}/>
    </div>
  )
}