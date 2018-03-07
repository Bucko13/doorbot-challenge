import React from 'react';
import Login from '../components/Login'

class LoginContainer extends React.Component {
  state = {
    form: {
      username: '',
      password: ''
    }
  }

  handleChangeUser = (event) => {
    const value = event.target.value
    this.setState((state) => ({
      form: Object.assign({}, state.form, {
        username: value
      })
    }));
  }

  handleChangePassword = (event) => {
    const value = event.target.value
    this.setState((state) => ({
      form: Object.assign({}, state.form, {
        password: value
      })
    }));
  }

  render() {
    return (
      <Login
        form={this.state.form}
        onChangeUser={this.handleChangeUser}
        onChangePassword={this.handleChangePassword}
      />
    )
  }
}

export default LoginContainer;
