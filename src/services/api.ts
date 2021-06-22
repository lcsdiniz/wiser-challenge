import axios from 'axios';

const api = axios.create({
  baseURL: 'https://60d11db47de0b2001710a132.mockapi.io/api/',
});

export default api;