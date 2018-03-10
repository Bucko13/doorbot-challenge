export function straigthResponseData(response) {
  return response.data;
}

export function straigthResponseError(error) {
  return Promise.reject(error.response.data);
}
