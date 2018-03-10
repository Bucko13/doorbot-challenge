import axios from 'axios';
import { straigthResponseData, straigthResponseError } from '../../helpers/axiosInterceptors';

const userAxios = axios.create();
userAxios.interceptors.response.use(straigthResponseData, straigthResponseError);

function login({ username, password }) {
  return userAxios.post('/auth', { username, password });
}

const userApi = {
  login,
}

export default userApi;
