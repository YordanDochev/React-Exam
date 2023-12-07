import styles from './Login.module.css'
import useForm from '../../hooks/useForm'
import { useContext, useState } from 'react'
import AuthContext from '../../contexts/authContext'
import useValidator from '../../hooks/useValidator'

const initialValues = {
    email: '',
    password: ''
}

const LoginFormKyes = {
    Email: 'email',
    Password: 'password',
};



export default function FormLogin() {

    const { loginSubmitHandler, errorFlag, statusToggler } = useContext(AuthContext)

    const { values, onChangeHandler, onSubmit } = useForm({
        [LoginFormKyes.Email]: '',
        [LoginFormKyes.Password]: '',
    }, loginSubmitHandler)

   
    const { errors, validatorHandler } = useValidator()

    
    // const [errors, setErros] = useState({})
    // const emailValidatorHandler = () => {
    //     const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)

    //     if (!isValidEmail || values.email === "") {
    //         setErros(state => ({
    //             ...state,
    //             email: 'Please insert a valid email'
    //         }))
    //     } else {
    //         if (errors.email) {
    //             setErros(state => ({
    //                 ...state,
    //                 email: ''
    //             }))
    //         }
    //     }
    // }

    // const passwordValidatorHandler = () => {

    //     if (values.password === "") {
    //         setErros(state => ({
    //             ...state,
    //             password: 'Please insert password'
    //         }))
    //     } else {
    //         if (errors.password) {
    //             setErros(state => ({
    //                 ...state,
    //                 password: ''
    //             }))
    //         }
    //     }

    // }

    return (
        <form onSubmit={onSubmit}>

            <div id="inputDiv" className="row g-3">
                <div className="col-12">
                    <div className="form-floating">
                        <input
                            type="text"
                            className={`form-control ${styles.input}`}
                            id="email"
                            name={LoginFormKyes.Email}
                            placeholder="Email"
                            value={values[LoginFormKyes.Email]}
                            onChange={onChangeHandler}
                            onBlur={()=>validatorHandler(LoginFormKyes.Email,values.email)}
                        />
                        <label className={styles.label} htmlFor="email">Email</label>
                        {errors.email && (
                            <p className={styles.errorMessage}>{errors.email}</p>
                        )}
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <input
                            type="password"
                            className={`form-control ${styles.input}`}
                            id="subject"
                            name={LoginFormKyes.Password}
                            placeholder="Password"
                            value={values[LoginFormKyes.Password]}
                            onChange={onChangeHandler}
                            onBlur={()=>validatorHandler(LoginFormKyes.Password,values.password)}
                        />
                        <label className={styles.label} htmlFor="subject">Password</label>
                        {errors.password && (
                            <p className={styles.errorMessage}>{errors.password}</p>
                        )}
                    </div>
                </div>

                <div className="col-12">

                    <button
                        className={`btn btn-primary w-100 py-3 ${styles.loginButton}`}
                        disabled={Object.values(errors).some(er => er)}
                        onClick={statusToggler}
                        type="submit">
                        Login
                    </button>
                </div>
                {errorFlag !== "" && (
                    <p className={styles.errorMessage}>The user does not exist , please insert the correct email and password!</p>
                )}
                <div className={styles.registerRedirect}>

                    <p>
                        If you don't have register <a className={styles.singUpLink} href="/register">Register</a>
                    </p>
                </div>
            </div>
        </form>


    )
}