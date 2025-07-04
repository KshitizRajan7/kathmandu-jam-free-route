import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "backend url",
    headers: {
        'content-Type': 'application/json'
    }
})

export default axiosInstance;