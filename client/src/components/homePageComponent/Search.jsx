import styles from './Home.module.css'

export default function Search() {
    return (
        <>
            <div className={`container-fluid bg-primary mb-5 wow fadeIn ${styles.searchDiv}`} data-wow-delay="0.1s" >
                <div className="container">
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-4">
                                    <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword" />
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword" />
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-dark border-0 w-100 py-3">Search</button>
                        </div>

                    </div>
                </div>
            </div>
            {/* TO DO : show there are no content if do not have matches */}
            {/* <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="src/assets/img/icon-apartment.png" alt="Icon" />
                                    </div>
                                    <h6>Apartment</h6>
                                    <span>123 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="src/assets/img/icon-villa.png" alt="Icon" />
                                    </div>
                                    <h6>Villa</h6>
                                    <span>123 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="src/assets/img/icon-house.png" alt="Icon" />
                                    </div>
                                    <h6>Home</h6>
                                    <span>123 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="src/assets/img/icon-housing.png" alt="Icon" />
                                    </div>
                                    <h6>Office</h6>
                                    <span>123 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="src/assets/img/icon-building.png" alt="Icon" />
                                    </div>
                                    <h6>Building</h6>
                                    <span>123 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="src/assets/img/icon-neighborhood.png" alt="Icon" />
                                    </div>
                                    <h6>Townhouse</h6>
                                    <span>123 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="src/assets/img/icon-condominium.png" alt="Icon" />
                                    </div>
                                    <h6>Shop</h6>
                                    <span>123 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="src/assets/img/icon-luxury.png" alt="Icon" />
                                    </div>
                                    <h6>Garage</h6>
                                    <span>123 Properties</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}