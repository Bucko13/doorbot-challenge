// Small library to improve on fetch() usage
const fetchApi = function(method, url, data, headers = {}){
  return fetch(url, {
    method: method.toUpperCase(),
    body: JSON.stringify(data),  // send it as stringified json
    credentials: fetchApi.credentials,  // to keep the session on the request
    headers: Object.assign({}, fetchApi.headers, headers)  // extend the headers
  }).then(res => {
    if (res.ok) { return res.json() }

    const contentType = res.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      return res.json().then((data) => Promise.reject(data));
    } else {
      return Promise.reject({ error: 'There was an internal server error. Please try again.' });
    }
  });
};

// Defaults that can be globally overwritten
fetchApi.credentials = 'include';
fetchApi.headers = {
  'csrf-token': window.csrf || '',    // only if globally set, otherwise ignored
  'Accept': 'application/json',       // receive json
  'Content-Type': 'application/json'  // send json
};

// Convenient methods
['get', 'post', 'put', 'delete'].forEach(method => {
  fetchApi[method] = fetchApi.bind(null, method);
});

export default fetchApi;
