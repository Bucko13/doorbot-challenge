import { EventEmitter } from 'events'

const AppState = new EventEmitter

AppState.value = 'appstate' in localStorage
  ? JSON.parse(localStorage['appstate'])
  : {}

AppState.set = function(props){
  Object.assign(AppState.value, props)
  AppState.emit('change')
}

AppState.on('change', () => {
  console.log('AppState', AppState.value)
  localStorage['appstate'] = JSON.stringify(AppState.value)
})

export default AppState
