import React from 'react'
import PropTypes from 'prop-types'
import AppState from './AppState'
import Router from './Router'

export default class App extends React.Component {

  static childContextTypes = {
    appState: PropTypes.object.isRequired,
  }

  constructor(){
    super()
    AppState.on('change', () => {
      this.forceUpdate()
    })
  }

  getChildContext(){
    return {
      appState: AppState.value,
    }
  }

  render(){
    return <div>
      <Router appState={AppState.value} />
    </div>
  }
}
