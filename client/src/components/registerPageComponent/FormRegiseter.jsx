import { useContext } from 'react'
import useForm from '../../hooks/useForm'
import styles from './Register.module.css'
import AuthContext from '../../contexts/authContext';

const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    rePassword: ''
}

export default function FormRegister() {
    const {registerSubmitHanler} = useContext(AuthContext);
    
    const { values, onChangeHandler, onSubmit } = useForm(initialValues, registerSubmitHanler)

    return (
        <form onSubmit={onSubmit}>

            <div className="row g-3">
                <div className="col-12">
                    <div className="form-floating">
                        <input
                            type="text"
                            name='email'
                            className="form-control"
                            id="subject"
                            placeholder="Email"
                            value={values.email}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor="email">Email </label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            name='firstName'
                            id="firstName"
                            placeholder="First Name"
                            value={values.firstName}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            value={values.lastName}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="rePassword"
                            name="rePassword"
                            placeholder=">Repeat Password"
                            value={values.rePassword}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor="rePassword">Repeat Password</label>
                    </div>
                </div>
                <div className="col-12">
                    <button className={`btn btn-primary w-100 py-3 ${styles.registerButton}`} type="submit">
                        Register
                    </button>
                </div>
                <div className={styles.loingRedirect}>
                    <p>
                        Already have an account? <a className={styles.singInLink} href="/login">Sing In</a>
                    </p>
                </div>
            </div>
        </form>


    )
}