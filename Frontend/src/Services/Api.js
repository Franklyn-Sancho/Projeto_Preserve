import axios from 'axios';

const api = axios.create({
    baseURL: process.env.LOCALHOST
});

export default api;