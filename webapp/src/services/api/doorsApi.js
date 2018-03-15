import axios from 'axios';
import { straigthResponseData, straigthResponseError } from '../../helpers/axiosInterceptors';

const doorsAxios = axios.create();
doorsAxios.interceptors.response.use(straigthResponseData, straigthResponseError);

export function fetchDoors() {
  return doorsAxios.get('/doors/');
}

export function openDoor({ id }) {
  return doorsAxios.post(`/doors/${id}/open`);
}
