import React from 'react'
import PropTypes from 'prop-types'
import CreateDoor from '../actions/CreateDoor'

export default class NewDoorPage extends React.Component {
  constructor(){
    super()
    this.createDoor = this.createDoor.bind(this)
  }
  createDoor(event){
    event.preventDefault()
    CreateDoor({name: this.name.value}).then(
      door => {
        this.props.history.push(`/doors/${door.id}`)
      }
    )
  }
  render(){
    return <div className="NewDoorPage">
      <h1>Create a New Door</h1>
      <form onSubmit={this.createDoor}>
        <input
          type="text"
          placeholder="door name"
          ref={input => this.name = input}
        />
        <input type="submit" value="create" />
      </form>
    </div>
  }
}

