import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LoadDoors from '../actions/LoadDoors'

export default class DoorsPage extends React.Component {

  static contextTypes = {
    appState: PropTypes.object.isRequired,
  }

  constructor(){
    super()
    LoadDoors()
  }

  render(){
    const { doors } = this.context.appState

    const doorsList = doors
      ? <DoorsList doors={doors} />
      : <div>Loading…</div>

    return <div>
      <h1>Doors</h1>
      <Link to="/doors/new">Create a New Door</Link>
      {doorsList}
    </div>
  }
}


const DoorsList = ({doors}) => {
  const doorsListItems = Object.keys(doors).length === 0
  ? <div>There are currently no doors</div>
  : Object.keys(doors).map(doorId => {
      const door = doors[doorId]
      return <li key={door.id}>
        <Link to={`/doors/${door.id}`}>{door.name}</Link>
      </li>
    })

  return <ul>{doorsListItems}</ul>
}
