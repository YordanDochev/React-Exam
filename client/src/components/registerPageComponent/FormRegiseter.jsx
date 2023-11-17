import styles from './Register.module.css'

export default function FormRegister() {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className={`text-center mx-auto mb-5 wow fadeInUp ${styles.singUpHeader}`} data-wow-delay="0.1s">
                        <h1 className={`mb-3 ${styles.singUpH1}`}>Sing up</h1>
                    </div>
                    <div className={`col-md-6 ${styles.registerForm}`}>
                        <div className="wow fadeInUp" data-wow-delay="0.5s" >

                            <form>
                                
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="subject"
                                                placeholder="Username"
                                            />
                                            <label htmlFor="subject">Username</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="First Name"
                                            />
                                            <label htmlFor="name">First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Last Name"
                                            />
                                            <label htmlFor="email">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="subject"
                                                placeholder="Password"
                                            />
                                            <label htmlFor="subject">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="subject"
                                                placeholder=">Repeat Password"
                                            />
                                            <label htmlFor="subject">Repeat Password</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className={`btn btn-primary w-100 py-3 ${styles.registerButton}`} type="submit">
                                            Register
                                        </button>
                                    </div>
                                    <div className={styles.loingRedirect}>
                                        <p>
                                            Already have an account? <a className={styles.singInLink}href="/login">Sing In</a>
                                        </p>
                                    </div>
                                </div>
                            </form>
                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}