import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as estateService from '../../services/estateService'

import ContactUs from "./ContactUs";
import DetailInformation from "./DetailInformation";
import HeaderDetails from "./HeaderDetails";

export default function Details() {
    const {estateId} = useParams(); 
    const [estate,setEstate] = useState({})
    const navigate = useNavigate();
    useEffect(()=>{
        estateService.getOne(estateId)
            .then(setEstate)
            .catch(err=> console.log(err))
    },[estateId])

    const onDeleteClickHandler = async (estateId) => {
        try {
            await estateService.remove(estateId);
            navigate('/catalog')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <HeaderDetails />
            
            <DetailInformation {...estate} onDeleteClickHandler={onDeleteClickHandler}/>

            <ContactUs/>
        </>
    )
}