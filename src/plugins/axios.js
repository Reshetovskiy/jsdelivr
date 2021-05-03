// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://data.jsdelivr.com/v1',
});

export const search = axios.create({
  baseURL: 'https://registry.npmjs.com/-/v1',
});

API.interceptors.request.use((config) => config);

API.interceptors.response.use((response) => response, (error) => error);
