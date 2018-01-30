import React from 'react'
import Login from '../actions/Login'

export default class LoginPage extends React.Component {
  render(){
    return <div>


      <LoginForm />
    </div>
  }
}


class LoginForm extends React.Component {
  constructor(){
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(event){
    event.preventDefault()
    Login({
      username: this.username.value,
      password: this.password.value,
    })
  }
  render(){
    return <form onSubmit={this.onSubmit}>
      <div>
        <input
          type="text"
          placeholder="username"
          ref={input => this.username = input}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          ref={input => this.password = input}
        />
      </div>
      <input type="submit" value="Login"/>
    </form>
  }
}
