import React from 'react';
import Login from '../components/Login'
import { connect } from 'react-redux';
import { login } from '../redux/actions/userActions';
import { Redirect } from 'react-router-dom';

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

  handleSubmit = () => {
    this.props.login(this.state.form);
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
    const isLoggedIn = !!this.props.user.username;

    return (
      <div>
        {
          isLoggedIn ?
          <Redirect to='/doors' /> :
          <Login
            form={this.state.form}
            error={this.props.user.error}
            onSubmit={this.handleSubmit}
            onChangeUser={this.handleChangeUser}
            onChangePassword={this.handleChangePassword}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(login(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
