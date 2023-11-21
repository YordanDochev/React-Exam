import styles from './Register.module.css'

export default function FormRegister() {
    return (


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
                        Already have an account? <a className={styles.singInLink} href="/login">Sing In</a>
                    </p>
                </div>
            </div>
        </form>


    )
}