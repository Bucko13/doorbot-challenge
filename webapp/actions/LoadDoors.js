import AppState from '../AppState'
import request from '../request'

export default function LoadDoors(){
  return request.get('/api/doors')
    .then(
      doors => {

        if (!AppState.value.doors)
          AppState.value.doors = {}

        doors.forEach(door => {
          AppState.value.doors[door.id] = door
        })
        AppState.set()
      },
      response => {
        AppState.addError('failed to load doors')
      }
    )
}
