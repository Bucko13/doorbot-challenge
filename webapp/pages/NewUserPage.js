import React from 'react'
import PropTypes from 'prop-types'
import CreateUser from '../actions/CreateUser'

export default class NewUserPage extends React.Component {
  constructor(){
    super()
    this.createUser = this.createUser.bind(this)
  }
  createUser(event){
    event.preventDefault()
    CreateUser({username: this.username.value}).then(
      user => {
        this.props.history.push(`/users/${user.id}`)
      }
    )
  }
  render(){
    return <div className="NewUserPage">
      <h1>Create a New User</h1>
      <form onSubmit={this.createUser}>
        <input
          type="text"
          placeholder="username"
          ref={input => this.username = input}
        />
        <input type="submit" value="create" />
      </form>
    </div>
  }
}

