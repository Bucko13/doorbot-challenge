import AppState from '../AppState'
import request from '../request'

export default function LoadUser(username){
  return request.get(`/api/users/${username}`)
}
