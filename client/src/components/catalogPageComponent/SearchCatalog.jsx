import styles from "./Catalog.module.css"

export default function SearchCatalog() {
    return (
        <>
            <div className={`${styles.searchDiv} container-fluid bg-primary mb-5 wow fadeIn`} data-wow-delay="0.1s" >
                <div className="container">
                    {/* <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control border-0 py-3"
                                        placeholder="Search Keyword"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0 py-3">
                                        <option selected="">Property Type</option>
                                        <option value={1}>Property Type 1</option>
                                        <option value={2}>Property Type 2</option>
                                        <option value={3}>Property Type 3</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0 py-3">
                                        <option selected="">Location</option>
                                        <option value={1}>Location 1</option>
                                        <option value={2}>Location 2</option>
                                        <option value={3}>Location 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-dark border-0 w-100 py-3">
                                Search
                            </button>
                        </div>
                    </div> */}
                    <div className={`col-lg-3 col-sm-6 wow fadeInUp ${styles.ourAssestHeaderDiv}`} data-wow-delay="0.7s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3" >
                                    <img className="img-fluid" src="src/assets/img/icon-luxury.png" alt="Icon" />
                                </div>
                                <h6>Garage</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                    <div className={`col-lg-3 col-sm-6 wow fadeInUp ${styles.ourAssestHeaderDiv}`} data-wow-delay="0.5s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3" >
                                    <img className="img-fluid" src="src/assets/img/icon-luxury.png" alt="Icon" />
                                </div>
                                <h6>Garage</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                    <div className={`col-lg-3 col-sm-6 wow fadeInUp ${styles.ourAssestHeaderDiv}`} data-wow-delay="0.3s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3" >
                                    <img className="img-fluid" src="src/assets/img/icon-luxury.png" alt="Icon" />
                                </div>
                                <h6>Garage</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>

                    <div className={`col-lg-3 col-sm-6 wow fadeInUp ${styles.ourAssestHeaderDiv}`} data-wow-delay="0.3s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3" >
                                    <img className="img-fluid" src="src/assets/img/icon-luxury.png" alt="Icon" />
                                </div>
                                <h6>Garage</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}