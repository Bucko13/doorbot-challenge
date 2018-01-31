import AppState from '../AppState'
import request from '../request'

export default function CreateUser({username}){
  return request.post('/api/users', {username}).then(
    user => {
      if (!AppState.value.users)
        AppState.value.users = {}
      AppState.value.users[user.id] = user
      return user
    },
    response => {
      if (response.status === 400){
        AppState.addError(`Unable to create user`)
      }else{
        response.text().then(errorMessage => {
          AppState.addError(`Error: ${errorMessage}`)
        })
      }
      throw response
    }
  )
}
