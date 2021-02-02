import axios from 'axios';

const api = axios.create({
  baseURL: "http://helpfest-backend.herokuapp.com",  
});

export default api;