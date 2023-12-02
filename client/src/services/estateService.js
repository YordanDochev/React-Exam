import * as request from '../lib/request'

const baseUrl = 'http://localhost:3030/data/estates'

export const getAll = async () => {
    const estates = await request.get(baseUrl)

    return estates
}

export const create = async (estateData) => {
    const result = await request.post(baseUrl,estateData)

    return result
}

export const getLatesVillas = async () =>{

    const result = await request.get(`${baseUrl}?where=types Like "Villa"&sortBy=_createdOn decs&offset=0&pageSize=3`)

    return result;
}

export const getLatesApartment = async () =>{

    const result = await request.get(`${baseUrl}?where=types Like "Apartment"&sortBy=_createdOn decs&offset=0&pageSize=3`)

    return result;
}

export const getLatesOffice = async () =>{

    const result = await request.get(`${baseUrl}?where=types Like "Office"&sortBy=_createdOn decs&offset=0&pageSize=3`)

    return result;
}

export const getLatesGarage = async () =>{

    const result = await request.get(`${baseUrl}?where=types Like "Garage"&sortBy=_createdOn decs&offset=0&pageSize=3`)

    return result;
}

export const getCountVillas = async () => {
    const count = await request.get(`${baseUrl}?where=types Like "Villa"&count`)

    return count;
}

export const getCountApartments = async () => {
    const count = await request.get(`${baseUrl}?where=types Like "Apartment"&count`)

    return count;
}

export const getCountOffices = async () => {
    const count = await request.get(`${baseUrl}?where=types Like "Office"&count`)

    return count;
}

export const getCountGarages = async () => {
    const count = await request.get(`${baseUrl}?where=types Like "Garage"&count`)

    return count;
}