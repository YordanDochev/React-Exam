import styles from './Details.module.css'


export default function ContactUs() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded p-3">
                    <div
                        className={`${styles.contactUs} bg-white rounded p-4`}
                    >
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <img
                                    className="img-fluid rounded w-100"
                                    src="src/assets/img/call-to-action.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="mb-4">
                                    <h1 className="mb-3">Contact With Our Certified Agent</h1>
                                    <p>
                                        Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd
                                        vero ipsum sit sit diam justo sed vero dolor duo.
                                    </p>
                                </div>
                                <a href="" className="btn btn-primary py-3 px-4 me-2">
                                    <i className="fa fa-phone-alt me-2" />
                                    Make A Call
                                </a>
                                <a href="" className="btn btn-dark py-3 px-4">
                                    <i className="fa fa-calendar-alt me-2" />
                                    Get Appoinment
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}