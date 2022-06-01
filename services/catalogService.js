import axios from 'axios';

const baseUrl = "http://localhost:3001/v1/catalogs";

const getAuthHeaders = () => {
    const token = localStorage.getItem("token")
    return {
        headers: {
            "Authorization": `Bearer: ${token}`
        }
    }
}


export async function getDoctorsForOptions() {
    let result = []
    try {
        result = await axios.get(`${baseUrl}/doctors`, getAuthHeaders())
    } catch (err) {
        if (err.response) {
            console.log(err.response.status)
        } else {
            console.log('Error', err.message)
        }
    }
    return result.data
}

