import React from 'react';
import Signup from './Signup.jsx';
import Door from './Door.jsx';

// TODO - webpack resolver for clean imports
import requests from '../utils/requests.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isDoorOpen: false,
      isLoggedIn: false,
    };
  }

  signUp(username) {
    requests.signUp(username)
      .then(res => {
        // set state for success popup
        // popup disappears after timeout
        console.log(res)
      })
      .catch(err => {
        // present to user in pop up
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1>The Door Game</h1>
        <Signup
          isLoggedIn={this.state.isLoggedIn}
          signUp={this.signUp}
        />
        <Door
          isOpen={this.state.isDoorOpen}
          getDoors={requests.getDoors}
          createDoor={requests.createDoor}
        />
      </div>
    )
  }
}

module.exports = App;
