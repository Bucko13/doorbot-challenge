import AppState from '../AppState'
import request from '../request'

export default function Logout(){
  return request.delete('/api/auth').then(() => {
    AppState.clear()
  })
}
