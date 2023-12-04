import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as estateService from '../../services/estateService'

import ContactUs from "./ContactUs";
import DetailInformation from "./DetailInformation";
import HeaderDetails from "./HeaderDetails";

export default function Details() {
    const {estateId} = useParams(); 
    const [estate,setEstate] = useState({})
    console.log(estateId);
    useEffect(()=>{
        estateService.getOne(estateId)
            .then(setEstate)
            .catch(err=> console.log(err))
    },[estateId])

    return (
        <>
            <HeaderDetails />
            
            <DetailInformation {...estate}/>

            <ContactUs/>
        </>
    )
}