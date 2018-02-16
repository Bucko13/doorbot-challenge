import React from 'react';
import { Button } from 'react-bootstrap';

class Door extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doorName: ''
    }
  }

  handleChange(event) {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div>
        <p>The door is {this.props.isOpen.toString()}</p>
        <Button onClick={() => this.props.getDoors()}>Get Doors</Button>
        <div>
          <h3>Create a Door</h3>
          <p>Door name:</p>
          <input type="text" value={this.state.doorName} onChange={this.handleChange} />
          <Button onClick={() => this.props.createDoor(this.state.username)}>Create Door</Button>
        </div>
      </div>
    )
  }
}

module.exports = Door;


