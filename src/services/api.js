import axios from "axios"

const api = axios.create({
    baseURL: 'https://node-zero-olqg.onrender.com'
    //baseURL: 'http://localhost:3333'
})

export default api
