import styles from './Login.module.css'

export default function FormLogin() {
    return (
        <form>

            <div id="inputDiv" className="row g-3">
                <div className="col-12">
                    <div className="form-floating">
                        <input
                            type="text"
                            className={`form-control ${styles.input}`}
                            id="subject"
                            placeholder="Username"
                        />
                        <label className={styles.label} htmlFor="subject">Username</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <input
                            type="text"
                            className={`form-control ${styles.input}`}
                            id="subject"
                            placeholder="Password"
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