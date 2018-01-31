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

request.get = (path, params={}) => {
  return request('GET', path)
    .then(response => {
      if (response.ok) return response.json()
      throw response
    })
}

request.post = (path, payload) => {
  return request('POST', path, payload)
    .then(response => {
      if (response.ok) return response.json()
      throw response
    })
}

request.delete = (path) => {
  return request('DELETE', path)
}

export default request
