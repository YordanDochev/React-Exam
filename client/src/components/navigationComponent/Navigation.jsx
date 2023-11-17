import styles from './Navigation.module.css'
export default function Navigation() {
    return (
        <>
            <div className="container-fluid nav-bar bg-transparent">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                    <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
                        <div className="icon p-2 me-2">
                            <img className={`img-fluid ${styles.imageNav}`} src="src/assets/img/icon-villa.png" alt="Icon" />
                        </div>
                        <h1 className="m-0 text-primary">Estate</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <a href="index.html" className="nav-item nav-link">Home</a>
                            <a href="about.html" className="nav-item nav-link">Catalog</a>
                        </div>
                            <a href="" className="btn btn-primary px-3 d-none d-lg-flex">Login</a>
                            <a href="" className={`${styles.registerButton} btn btn-primary px-3 d-none d-lg-flex`}>Register</a>
                            {/* <a href="" className="btn btn-primary px-3 d-none d-lg-flex"style={{marginLeft:20}}>Create Estate</a> */}
                    </div>
                </nav>
            </div>
        </>
    )
}