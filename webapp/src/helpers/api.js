import fetchApi from './fetchApi';

function login({ username, password }) {
  return fetchApi.post('/api/v1/auth', { username, password });
}

const api = {
  login
}

export default api;
