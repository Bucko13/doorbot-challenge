import React from 'react';
import { Button } from 'react-bootstrap';

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.username} onChange={this.handleChange} />
        <Button onClick={() => this.props.signUp(this.state.username)}>Sign Up</Button>
        <p>Logged In: {this.props.isLoggedIn.toString()}</p>
      </div>
    )
  }
}

module.exports = Signup;

