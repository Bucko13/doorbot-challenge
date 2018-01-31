import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LoadUsers from '../actions/LoadUsers'

export default class DoorsPage extends React.Component {

  static contextTypes = {
    appState: PropTypes.object.isRequired,
  }

  constructor(){
    super()
    LoadUsers()
  }

  render(){
    const { users } = this.context.appState

    const usersList = users
      ? <UsersList users={users} />
      : <div>Loading…</div>

    return <div>
      <h1>Doors</h1>
      <Link to="/users/new">Create a New User</Link>
      {usersList}
    </div>
  }
}


const UsersList = ({users}) => {
  const usersListItems = Object.keys(users).length === 0
  ? <div>There are currently no users</div>
  : Object.keys(users).map(userId => {
      const user = users[userId]
      return <li key={user.id}>
        <Link to={`/users/${user.id}`}>{user.username}</Link>
      </li>
    })

  return <ul>{usersListItems}</ul>
}
