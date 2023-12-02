import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as estateService from '../../services/estateService'

import Villa from "./hotOffers-items/Villa";
import Apartment from "./hotOffers-items/Apartment";
import Garage from "./hotOffers-items/Garage";
import Office from "./hotOffers-items/Office";


export default function HotOffers() {
    const [villas, setVillas] = useState([])
    const [apartments, setApartments] = useState([])
    const [offices, setOffices] = useState([])
    const [garages, setGarages] = useState([])


    useEffect(() => {
        estateService.getLatesVillas()
            .then(setVillas)
            .catch(err => console.log(err))

        estateService.getLatesApartment()
            .then(setApartments)
            .catch(err => console.log(err))

        estateService.getLatesOffice()
            .then(setOffices)
            .catch(err => console.log(err))

        estateService.getLatesGarage()
            .then(setGarages)
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-0 gx-5 align-items-end">
                    <div className="col-lg-6">
                        <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 className="mb-3">Hot Offers</h1>
                        </div>
                    </div>
                    <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">

                            <li className="nav-item me-2">
                                <a className="btn btn-outline-primary active" data-bs-toggle="pill" href="#tab-1">Villa</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-2">Apartment</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-3">Office</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-4">Garage</a>
                            </li>

                        </ul>
                    </div>

                </div>
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-4" >
                            {villas.map(villa => <Villa key={villa._id} villa={villa} />)}
                        </div>
                    </div>

                    <div id="tab-2" className="tab-pane fade show p-0">
                        <div className="row g-4" >
                            {apartments.map(apartment => <Apartment key={apartment._id} apartment={apartment} />)}
                        </div>
                    </div>
                    <div id="tab-3" className="tab-pane fade show p-0">
                        <div className="row g-4" >
                            {offices.map(office => <Office key={office._id} office={office} />)}
                        </div>
                    </div>
                    <div id="tab-4" className="tab-pane fade show p-0">
                        <div className="row g-4" >
                            {garages.map(garage => <Garage key={garage._id} garage={garage} />)}
                        </div>
                    </div>
                    <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s" style={{paddingTop:'30px'}}>
                        <Link to="/catalog" className="btn btn-primary py-3 px-5" href="">Browse More Property</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}