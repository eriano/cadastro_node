import axios from "axios"

const api = axios.create({
    baseURL: 'https://node-zero-8uqg.onrender.com'
    //baseURL: 'http://localhost:3333'
})

export default api