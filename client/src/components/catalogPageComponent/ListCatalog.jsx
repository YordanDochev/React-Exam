
import * as estateService from '../../services/estateService'
import { useEffect, useState } from "react";
import CatalogListItem from "./CatalogListItem";

export default function ListCatalog() {
    const [estates,setEstates] = useState([]);

    useEffect(()=>{
        estateService.getAll()
            .then(setEstates)
            .catch(err=> console.log(err));
    },[])
    return (
        <>
            <div className="container-xxl py-5">
                
                <div className="container">
                    <div className="row g-0 gx-5 align-items-end divHeaderTex">
                        <div className="col-lg-6">
                            <div
                                className="text-start mx-auto mb-5 wow slideInLeft"
                                data-wow-delay="0.1s"
                            >
                                <h1 className="mb-3">Property Listing</h1>
                                <p>
                                    Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor
                                    ut dolore lorem kasd vero ipsum sit eirmod sit diam justo
                                    sed rebum.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 text-start text-lg-end wow slideInRight"
                            data-wow-delay="0.1s"
                        >
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                            {estates.map(estate => <CatalogListItem key={estate._id} estate={estate}/>)}

                            </div>
                        </div>
                        {/* If the time is not finished - do this (idea with Apartment/House) */}
                    </div>
                </div>
            </div>
        </>
    )
}