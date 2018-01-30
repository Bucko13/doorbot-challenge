import React from 'react'
import { Link } from 'react-router-dom'

export default class LoggedOutHomePage extends React.Component {
  render(){
    return <div className="LoggedOutHomePage">
      <h1>Welcome to Doorbot</h1>
      <ul>
        <li>
          <Link to="/signup">Singup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

    </div>
  }
}
