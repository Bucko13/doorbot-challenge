import AppState from '../AppState'
import request from '../request'

export default function CreateDoor({name}){
  return request.post('/api/doors', {name}).then(
    door => {
      if (!AppState.value.doors)
        AppState.value.doors = {}
      AppState.value.doors[door.id] = door
      return door
    },
    response => {
      if (response.status === 400){
        AppState.addError(`Unable to create door`)
      }
      throw response
    }
  )
}
