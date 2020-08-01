import { useState } from 'react';

export default function useForm(initalValues) {
  const [values, setValues] = useState(initalValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  function clearForm() {
    setValues(initalValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}
