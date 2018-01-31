import AppState from '../AppState'
import request from '../request'

export default function Login({username, password}){
  return request.post('/api/auth', {
    username,
    password,
  }).then(currentUser => {
    AppState.set({currentUser})
  })
}
