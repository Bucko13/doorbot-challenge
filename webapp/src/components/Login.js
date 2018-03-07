import React from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react'

const Login = ({ form, onChangeUser, onChangePassword }) => {
  return (
    <Segment size='tiny' padded='very'>
      <Header as='h1'>Account login</Header>
      <Form>
        <Form.Field>
          <label>Username</label>
          <input onChange={onChangeUser} value={form.username} placeholder='Username' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type='password'
            onChange={onChangePassword}
            value={form.password}
            placeholder='Password'
          />
        </Form.Field>
        <Button type='submit'>Login</Button>
      </Form>
    </Segment>
  )
}

export default Login;
