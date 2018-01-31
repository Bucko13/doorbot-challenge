import AppState from '../AppState'
import request from '../request'

export default function LoadUsers(){
  return request.get('/api/users')
    .then(
      users => {
        AppState.value.users = {}

        users.forEach(user => {
          AppState.value.users[user.id] = user
        })
        AppState.set()
      },
      response => {
        AppState.addError('failed to load users')
      }
    )
}
