import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Header, Segment } from 'semantic-ui-react'

const ResetPassword = ({ form, onChangePassword }) => {
  return (
    <Segment size='tiny' padded='very'>
      <Header as='h1'>Please set a new password</Header>
      <Form>
        <Form.Field>
          <label>New Password</label>
          <input
            type='password'
            onChange={onChangePassword}
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
};

export default ResetPassword;
