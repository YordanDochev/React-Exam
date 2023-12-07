import { useState } from "react";

export default function useValidator() {
  const [errors, setErrors] = useState({});
  const validatorHandler = (key, value) => {
    
    if (key === "email") {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

        if (!isValidEmail || value === "") {
            setErrors(state => ({
                ...state,
                email: 'Please insert a valid email'
            }))
        } else {
            if (errors.email) {
                setErrors(state => ({
                    ...state,
                    email: ''
                }))
            }
        }
    }else if(key==="password"){
        if (value === "") {
            setErrors(state => ({
                ...state,
                password: 'Please insert password'
            }))
        } else {
            if (errors.password) {
                setErrors(state => ({
                    ...state,
                    password: ''
                }))
            }
        }
    }
  };

  return {
    errors,
    validatorHandler,
  };
}
