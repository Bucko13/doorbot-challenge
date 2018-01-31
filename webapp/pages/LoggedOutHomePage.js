import React from 'react'
import { Link } from 'react-router-dom'

export default class LoggedOutHomePage extends React.Component {
  render(){
    return <div className="LoggedOutHomePage">
      <h1>Welcome to Doorbot</h1>
      <div><Link to="/login">Click here</Link> to login</div>

    </div>
  }
}
