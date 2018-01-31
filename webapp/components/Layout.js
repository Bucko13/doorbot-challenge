import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  Nav,
  Alert,
} from 'react-bootstrap'

export default class Layout extends React.Component {

  static contextTypes = {
    appState: PropTypes.object.isRequired,
  }

  render(){
    const { errors, currentUser } = this.context.appState

    return <div className="Layout">
      <LayoutNav currentUser={currentUser} />
      <Errors errors={errors || []} />
      <div>{this.props.children}</div>
    </div>
  }
}


function Errors({errors}){
  const alerts = errors.map(error =>
    <Alert key={error.id} bsStyle="danger">
      {error.message}
    </Alert>
  )
  return <div className="Errors">
    {alerts}
  </div>
}

function LayoutNav({currentUser}){
  const content = !currentUser
    // logged out navbar
    ? <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li role="presentation">
            <Link to="/signup">Singup</Link>
          </li>
          <li role="presentation">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>

    // logged in navbar
    : <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li role="presentation">
            <Link to="/doors">Doors</Link>
          </li>
          {
            currentUser.admin
              ? <li role="presentation">
                  <Link to="/users">Users</Link>
                </li>
              : null
          }
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li role="presentation">
            <Link to={`/users/${currentUser.username}`}>{currentUser.username}</Link>
          </li>
          <li role="presentation">
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>

  return <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Doorbot</Link>
      </Navbar.Brand>
    </Navbar.Header>
    {content}
  </Navbar>
}
