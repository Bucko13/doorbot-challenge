import AppState from '../AppState'
import request from '../request'
import LoadUser from './LoadUser'

export default function Login({username, password}){
  return request.post('/api/auth', {
    username,
    password,
  })
  .catch(response => {
    if (response.status === 401){
      AppState.addError(`Error: bad username or password`)
    }else{
      response.text().then(errorMessage => {
        AppState.addError(`Error: ${errorMessage}`)
      })
    }
    throw response
  })
  .then(currentUser => LoadUser(currentUser.username))
  .then(currentUser => {
    AppState.set({currentUser})
  })
}
