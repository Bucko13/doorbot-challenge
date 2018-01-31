import AppState from '../AppState'
import request from '../request'

export default function DeleteDoor(doorId){
  return request.delete(`/api/doors/${doorId}`)
    .then(
      () => {
        const doors = AppState.value.doors || {}
        delete doors[doorId]
        AppState.set({doors})
      },
      response => {
        AppState.addError('failed to delete door')
        throw response
      }
    )
}
