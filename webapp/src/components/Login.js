import React from 'react';
import { Message, Button, Form, Header, Segment } from 'semantic-ui-react'

const Login = ({ form, onChangeUser, onChangePassword, onSubmit, error }) => {
  return (
    <Segment size='tiny' padded='very'>
      <Header as='h1'>Account login</Header>
      { error ?
        <Message
          error
          header='Login failed'
          content={error}
        /> :
        null
      }
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Username</label>
          <input required onChange={onChangeUser} value={form.username} placeholder='Username' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            required
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
