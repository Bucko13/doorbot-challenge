import AppState from '../AppState'
import request from '../request'

export default function OpenDoor(doorId){
  return request.post(`/api/doors/${doorId}/open`)
    .then(
      response => response,
      response => {
        response.text().then(errorMessage => {
          AppState.addError(`Error: ${errorMessage}`)
        })
        throw response
      }
    )
}
