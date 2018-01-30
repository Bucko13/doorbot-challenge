const request = (method, path, payload) => {
  return fetch(path, {
    method: method,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload ? JSON.stringify(payload) : null,
  })
}

request.getJSON = (path, params={}) => {
  return request('GET', path)
    .then(response => response.json())
}

request.postJSON = (path, payload) => {
  return request('POST', path, payload)
    .then(response => response.json())
}

request.delete = (path) => {
  return request('DELETE', path)
}

export default request
