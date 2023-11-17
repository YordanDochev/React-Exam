import styles from './Login.module.css'

export default function FormLogin() {
    return (
            <div className={`${styles['container-xxl']} ${styles['py-5']} ${styles.loginDiv}`}>
                <div className="container">
                    <div
                        className={`text-center mx-auto mb-5 wow fadeInUp ${styles.singInHeader}`}
                        data-wow-delay="0.1s"
                    >
                        <h1 className={`${styles.singInH1} mb-3`}>Sing In</h1>
                    </div>
                    <div className={`col-md-6 ${styles.registerForm}`}>
                        <div className="wow fadeInUp" data-wow-delay="0.5s" >

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
                            
                        </div>

                    </div>
                </div>
            </div>
    )
}