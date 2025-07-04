import axios from "./axios";

export function loginUser(data) {
    const { email, password } = data;
    const response = axios.post('/users', { email, password });
    if (response.data.user) {

    }
    return response;
}
export function registerUser(data) {
    const response = axios.post('/users', { fullName, email, password });
    return response;
}
