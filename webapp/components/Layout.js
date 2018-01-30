import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  Nav
} from 'react-bootstrap'

export default class Layout extends React.Component {

  static contextTypes = {
    appState: PropTypes.object.isRequired,
  }

  render(){
    const { currentUser } = this.context.appState

    return <div className="Layout">
      <LayoutNav currentUser={currentUser} />
      <div>{this.props.children}</div>
    </div>
  }
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
