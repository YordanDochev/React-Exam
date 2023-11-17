import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={`${styles['footer-distributed']} ${styles.footerDiv}`}>
            <div className={styles['footer-left']}>
                <a href="index.html" className={`navbar-brand d-flex align-items-center text-center ${styles.navFooter}`}>
                    <div className="icon p-2 me-2">
                        <img className={`img-fluid ${styles.imageNav}`} src="src/assets/img/icon-villa.png" alt="Icon" />
                    </div>
                    <h1 className={`m-0 text-primary ${styles.estateH1}`}>Estate</h1>
                </a>
                <p className={styles['footer-links']}>
                    <a id="footer-links" href="#">Home</a>
                    <a id="footer-links" href="#">Catalog</a>
                    <a id="footer-links" href="#"> Register</a>
                    <a id="footer-links" href="#"> About Us</a>
                </p>
                <div className={styles.sloganP}>
                    <p className={styles['footer-company-name']}>© 2023 Author: Yordan Dochev - Softuni React project</p>
                </div>
                {/* <div className={styles['footer-icons']}>
                    <a className="btn btn-square mx-1" href="www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                </div> */}
            </div>
            <div className={styles['footer-right']}>
                <form action="#" method="post">

                    <h4>Your opinion matters to us</h4>

                    <textarea className={styles.commentTextArea}name="message" placeholder="Comment" defaultValue={""} />
                    <button>Comment</button>
                </form>
            </div>
        </footer>
    )
}