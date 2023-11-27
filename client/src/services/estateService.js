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