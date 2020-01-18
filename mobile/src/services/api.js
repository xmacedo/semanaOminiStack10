import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.24:1313',
});

export default api;