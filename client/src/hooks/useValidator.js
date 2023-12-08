import { useState } from "react";

export default function useValidator() {
  const [errors, setErrors] = useState({});
  const validatorHandler = (key, value, value2) => {
    
    if (key === "email") {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

        if (!isValidEmail || value === "") {
            setErrors(state => ({
                ...state,
                email: 'Please insert a valid Email'
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
        if (value === "" || value.length < 6) {
            setErrors(state => ({
                ...state,
                password: 'Password must be at least 6 characters long'
            }))
        }else {
            if (errors.password) {
                setErrors(state => ({
                    ...state,
                    password: ''
                }))
            }
        }
    }else if(key==="firstName"){
        const isValid = /^[a-zA-Z]+$/.test(value)
        console.log(isValid);
        if(!isValid || value===""){
            setErrors(state => ({
                ...state,
                firstName: "Please insert a valid Name"
            }))
        }else{
            if(errors.firstName){
                setErrors(state => ({
                    ...state,
                    firstName:""
                }))
            }
        }
    }else if(key==="lastName"){
        const isValid = /^[a-zA-Z]+$/.test(value)
        if(!isValid || value===""){
            setErrors(state => ({
                ...state,
                lastName: "Please insert a valid Surname"
            }))
        }else{
            if(errors.lastName){
                setErrors(state => ({
                    ...state,
                    lastName:""
                }))
            }
        }
    }else if(key==='rePassword'){
        if (value === "" ||value !== value2) {
            setErrors(state => ({
                ...state,
                rePassword: "Passwords do not match."
            }))
        }else{
            setErrors(state => ({
                ...state,
                rePassword:""
            }))
        }
    }
  };

  return {
    errors,
    validatorHandler,
  };
}
