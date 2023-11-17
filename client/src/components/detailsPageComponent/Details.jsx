import ImageDetails from "./ImageDetails";
// import styles from './Details.module.css'

export default function Details() {
    return (
        <>
                {/* About Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className={`row gy-4 `}>
                                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="bg-light rounded p-3">
                                        <div
                                            className="d-flex align-items-center bg-white rounded p-3"
                                            style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                                        >
                                            <div className="icon me-3" style={{ width: 45, height: 45 }}>
                                                <i className="fa fa-map-marker-alt text-primary" />
                                            </div>
                                            <span>Location: 123 Street, New York, USA</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="bg-light rounded p-3">
                                        <div
                                            className="d-flex align-items-center bg-white rounded p-3"
                                            style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                                        >
                                            <div className="icon me-3" style={{ width: 45, height: 45 }}>
                                                <i className="fa fa-phone-alt text-primary" />
                                            </div>
                                            <span>Contact: +012 345 6789</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="bg-light rounded p-3">
                                        <div
                                            className="d-flex align-items-center bg-white rounded p-3"
                                            style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                                        >
                                            <div className="icon me-3" style={{ width: 45, height: 45 }}>
                                                <img src="src/assets/img/icon-deal.png" alt="" />
                                            </div>
                                            <span>Price: 100,000$</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="position-relative overflow-hidden p-5 pe-0">
                                    <ImageDetails />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
                                <p className="mb-4">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium aspernatur quos quia doloremque suscipit aliquid excepturi asperiores quibusdam! Quo magnam deleniti earum cumque inventore rem debitis dolorum molestiae quaerat numquam sequi dicta nesciunt nemo vero ducimus autem, dolores praesentium nam fugit aspernatur? Quibusdam non, fugit sed quidem eum architecto sunt a nemo iusto consequatur distinctio odit dolorem optio sapiente culpa. Hic ad, aut, eaque dignissimos perspiciatis deserunt mollitia vitae explicabo consequuntur animi incidunt et! Amet aspernatur culpa similique veritatis soluta delectus sint labore quis, porro ratione expedita dolor nobis accusantium rem tempora suscipit provident quam impedit praesentium iste aliquid esse!
                                </p>
                                <p>
                                    <i className="fa fa-check text-primary me-3" />
                                    Tempor erat elitr rebum at clita
                                </p>
                                <p>
                                    <i className="fa fa-check text-primary me-3" />
                                    Aliqu diam amet diam et eos
                                </p>
                                <p>
                                    <i className="fa fa-check text-primary me-3" />
                                    Clita duo justo magna dolore erat amet
                                </p>
                                <a className="btn btn-primary py-3 px-5 mt-3" href="">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Call to Action Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="bg-light rounded p-3">
                            <div
                                className="bg-white rounded p-4"
                                style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
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
                {/* Call to Action End */}
        </>
    )
}