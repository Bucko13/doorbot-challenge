import { EventEmitter } from 'events'

const AppState = new EventEmitter

AppState.value = 'appstate' in localStorage
  ? JSON.parse(localStorage['appstate'])
  : {}

console.log('AppState', AppState.value)

AppState.clear = function(){
  AppState.value = {}
  AppState.emit('change')
}

AppState.set = function(props={}){
  Object.assign(AppState.value, props)
  AppState.emit('change')
}

AppState.addError = function(errorMessage){
  const errors = AppState.value.errors || []
  const error = {
    id: ErrorUUID(),
    createdAt: Date.now(),
    message: errorMessage
  }
  errors.push(error)
  AppState.set({errors})
}

AppState.removeError = function(targetError){
  console.log('removeError', targetError)
  const errors = (AppState.value.errors || [])

  const errorIndex = errors.findIndex(error =>
    error.id === targetError.id
  )

  if (errorIndex !== -1){
    errors.splice(errorIndex, 1)
    AppState.set({errors})
  }
}

AppState.on('change', () => {
  console.log('AppState', AppState.value)
  localStorage['appstate'] = JSON.stringify(AppState.value)
})


const ErrorUUID = () =>
  `${Date.now()}-${Math.round(Math.random()*10000)}`

const ERROR_TIMEOUT = 5000 // 5 seconds
const removeStaleErrors = function(){
  (AppState.value.errors || []).forEach(error => {
    if (Date.now() - error.createdAt > ERROR_TIMEOUT){
      AppState.removeError(error)
    }
  })
}

setInterval(removeStaleErrors, 1000)
removeStaleErrors()

export default AppState
