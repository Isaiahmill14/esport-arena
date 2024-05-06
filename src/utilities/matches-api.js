import sendRequest from "./send-request"
const BASE_URL = '/api/matches'

export async function getAll() {
    return sendRequest(BASE_URL)
}

export async function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export async function addOne(formData) {
    return sendRequest(BASE_URL, 'POST', formData)
} 

export async function editOne(id, formData) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', formData)
}