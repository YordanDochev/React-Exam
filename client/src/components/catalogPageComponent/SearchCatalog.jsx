import styles from "./Catalog.module.css"

export default function SearchCatalog() {
    return (
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

            /* TO DO : show there are no content if do not have matches */
    )
}