import React from 'react';
import PropTypes from 'prop-types';
import { Message, Button, Form, Header, Segment } from 'semantic-ui-react'

const ResetPassword = ({ form, onChangePassword, onSubmit, error }) => {
  return (
    <Segment size='tiny' padded='very'>
      <Header as='h1'>Please set a new password</Header>
      { error ?
        <Message
          data-test='error'
          error
          header='Failed to reset password'
          content={error}
        /> :
          null
      }
      <Form onSubmit={onSubmit} data-test='form'>
        <Form.Field>
          <label>New Password</label>
          <input
            type='password'
            onChange={onChangePassword}
            data-test='password'
            value={form.password}
            placeholder='Password'
          />
        </Form.Field>
        <Button color='teal' type='submit'>Set new password</Button>
      </Form>
    </Segment>
  )
}

ResetPassword.propTypes = {
  form: PropTypes.shape({
    password: PropTypes.string
  }),
  onChangePassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default ResetPassword;
