import AppState from '../AppState'
import request from '../request'

export default function LoadDoor(doorId){
  console.log('LOADING DOOR', doorId)
  return request.get(`/api/doors/${doorId}`)
    .then(
      door => {
        if (!AppState.value.doors)
          AppState.value.doors = {}
        AppState.value.doors[door.id] = door
        AppState.set()
      },
      response => {
        AppState.addError('failed to load door')
      }
    )
}
