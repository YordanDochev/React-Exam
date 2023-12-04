import styles from './Details.module.css'


export default function HeaderDetails() {
    return (
        <div className="container-fluid header bg-white p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-5">
                    <h1 className="display-5 animated fadeIn mb-4">Detail Page</h1>
                </div>
                <div className="col-md-6 animated fadeIn">
                    <img className="img-fluid" src="src/assets/img/header.jpg" alt="" />
                </div>
                <p className={styles.pHeader} >
                </p>

            </div>
        </div>
    )
}