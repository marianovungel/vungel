import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backunilabtem.herokuapp.com/',
});

export default api;