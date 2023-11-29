import styles from './Login.module.css'
import useForm from '../../hooks/useForm'

const initialValues = {
    email: '',
    password: ''
}

export default function FormLogin() {

    const loginSubmitHandler = (values) => {
        console.log(values);
    }

    const { values, onChangeHandler, onSubmit } = useForm(initialValues, loginSubmitHandler)


    return (
        <form onSubmit={onSubmit}>

            <div id="inputDiv" className="row g-3">
                <div className="col-12">
                    <div className="form-floating">
                        <input
                            type="text"
                            className={`form-control ${styles.input}`}
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={onChangeHandler}
                        />
                        <label className={styles.label} htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <input
                            type="password"
                            className={`form-control ${styles.input}`}
                            id="subject"
                            name="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={onChangeHandler}
                        />
                        <label className={styles.label} htmlFor="subject">Password</label>
                    </div>
                </div>
                <div className="col-12">
                    <button className={`btn btn-primary w-100 py-3 ${styles.loginButton}`} type="submit">
                        Login
                    </button>
                </div>
                <div className={styles.registerRedirect}>
                    <p>
                        If you don't have register <a className={styles.singUpLink} href="/register">Register</a>
                    </p>
                </div>
            </div>
        </form>


    )
}