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
    ? <div>
        <Link to="/signup">Singup</Link>
        <Link to="/login">Login</Link>
      </div>
    : <div>
        <span>{currentUser.username}</span>
        <Link to="/doors">Doors</Link>
        <Link to="/logout">Logout</Link>
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
