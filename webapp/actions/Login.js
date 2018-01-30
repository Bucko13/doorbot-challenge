import AppState from '../AppState'
import request from '../request'

export default function Login({username, password}){
  console.log('Login', {
    username,
    password,
  })

  request.postJSON('/auth', {
    username,
    password,
  }).then(currentUser => {
    AppState.set({currentUser})
  })
}
