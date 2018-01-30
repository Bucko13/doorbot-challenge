import AppState from '../AppState'
import request from '../request'

export default function Logout(){
  request.delete('/auth').then(() => {
    AppState.set({currentUser: null})
  })
}
