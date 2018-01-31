import React from 'react'
import Logout from '../actions/Logout'

export default class LogoutPage extends React.Component {
  componentDidMount(){
    Logout()
  }
  render(){
    return <div>Logging out…</div>
  }
}
