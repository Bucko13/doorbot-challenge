import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LoadDoor from '../actions/LoadDoor'
// import DeleteDoor from '../actions/DeleteDoor'
// import OpenDoor from '../actions/OpenDoor'

export default class UserShowPage extends React.Component {

  static contextTypes = {
    appState: PropTypes.object.isRequired,
  }

  constructor(){
    super()
    // this.deleteDoor = this.deleteDoor.bind(this)
    // this.openDoor = this.openDoor.bind(this)
  }

  componentDidMount(){
    // LoadDoor(this.doorId())
  }

  // doorId(){
  //   return this.props.match.params.id
  // }

  // door(){
  //   const doorId = this.doorId()
  //   const doors = this.context.appState.doors || {}
  //   return doors[doorId]
  // }

  // deleteDoor(event){
  //   event.preventDefault()
  //   const door = this.door()
  //   const confirmed = confirm(`Are you sure you want to delete "${door.name}"?`)
  //   if (confirmed){
  //     DeleteDoor(door.id).then(() => {
  //       this.props.history.push('/doors')
  //     })
  //   }
  // }

  // openDoor(event){
  //   event.preventDefault()
  //   OpenDoor(this.doorId())
  // }

  render(){
    return <div className="UserShowPage">

    </div>
  }
}

