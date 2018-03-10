import axios from 'axios';
import { straigthResponseData, straigthResponseError } from '../../helpers/axiosInterceptors';

const userAxios = axios.create();
userAxios.interceptors.response.use(straigthResponseData, straigthResponseError);

export function getCurrentUser() {
  return userAxios.get('/users/me')
}

export function login({ username, password }) {
  return userAxios.post('/auth', { username, password })
}
