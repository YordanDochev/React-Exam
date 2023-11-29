import { useState } from "react";

export default function useForm(initialValues, submitHandler) {
  const [values, setValues] = useState(initialValues);

  const onChangeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    submitHandler(values);

    setValues(initialValues)
  };

  return {
    values,
    onChangeHandler,
    onSubmit
  }
}
