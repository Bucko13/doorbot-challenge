import React from 'react';
import ResetPassword from '../components/ResetPassword'

class ResetPasswordContainer extends React.Component {
  state = {
    form: {
      password: ''
    }
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
      <ResetPassword
        form={this.state.form}
        onChangePassword={this.handleChangePassword}
      />
    )
  }
}

export default ResetPasswordContainer;
