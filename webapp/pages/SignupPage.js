import React from 'react'

export default class SingupPage extends React.Component {
  render(){
    return <div>
      <SignupForm />
    </div>
  }
}



class SignupForm extends React.Component {
  constructor(){
    super()
    this.signup = this.signup.bind(this)
  }
  signup(event){
    event.preventDefault()
    Login({
      username: this.username.value,
      password: this.password.value,
    })
  }
  render(){
    return <form onSubmit={this.signup}>
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
