import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LoadDoor from '../actions/LoadDoor'

export default class DoorShowPage extends React.Component {

  static contextTypes = {
    appState: PropTypes.object.isRequired,
  }

  componentDidMount(){
    LoadDoor(this.doorId())
  }

  doorId(){
    return this.props.match.params.id
  }

  render(){
    const doorId = this.doorId()
    const doors = this.context.appState.doors || {}
    const door = doors[doorId]

    const content = !door
      ? <div>Loading door {doorId}</div>
      : <div>
          <h1>Door "{door.name}"</h1>
          <ul>
            <li>
              <Link to={`/doors/${doorId}/delete`}>Delete</Link>
            </li>
            <li>
              <Link to={`/doors/${doorId}/edit`}>Edit</Link>
            </li>
          </ul>
        </div>

    return <div className="DoorShowPage">
      {content}
    </div>
  }
}

