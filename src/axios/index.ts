import axios from 'axios';

const BASE_URL = 'https://assignment.bunq.com/api';
const API_TOKEN = 'B5ztCfNVJwWDPqiD4Rk4VmuIiRzIZx4M';

const client = axios.create({
  baseURL: BASE_URL,
});

client.interceptors.request.use((config) => {
  const token = API_TOKEN;
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default client;
