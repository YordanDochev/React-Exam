import styles from './Details.module.css'

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

export default function DetailInformation() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <h1 className={`mb-4 ${styles.h1Header}`}>#1 Place To Find The Perfect Property</h1>
                    <div className={`row gy-4 ${styles.headerInformation}`} >
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div className="bg-light rounded p-3">

                                <div
                                    className={`d-flex align-items-center bg-white rounded p-3 ${styles.headerInformationDiv}`}
                                >
                                    <div className={`${styles.headerInformationDiv} icon me-3`} >
                                        <i className="fa fa-map-marker-alt text-primary" />
                                    </div>
                                    <span>Location: 123 Street, New York, USA</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="bg-light rounded p-3">
                                <div
                                    className={`${styles.headerInformationDiv} d-flex align-items-center bg-white rounded p-3`}
                                >
                                    <div className={`${styles.headerInformationDiv} icon me-3`} >
                                        <i className="fa fa-phone-alt text-primary" />
                                    </div>
                                    <span>Contact: +012 345 6789</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="bg-light rounded p-3">
                                <div
                                    className={`${styles.headerInformationDiv} d-flex align-items-center bg-white rounded p-3`}
                                >
                                    <div className={`${styles.headerInformationElements} icon me-3`}>
                                        <img src="src/assets/img/icon-deal.png" alt="" />
                                    </div>
                                    <span>Price: 100,000$</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="position-relative overflow-hidden p-5 pe-0">
                            <Carousel >
                                <Carousel.Item>
                                    <img className={styles.imgCarousel} src="src/assets/img/carousel-1.jpg" alt="" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" >
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
                            EDIT
                        </a>
                        <Button className={styles.buttonDelete} variant="danger">DELETE</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}