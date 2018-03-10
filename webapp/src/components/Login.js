import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

const Login = ({ form, onChangeUser, onChangePassword, onSubmit, error }) => (
  <Grid
    textAlign='center'
    style={{ height: '100%' }}
    verticalAlign='middle'
  >
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Log-in to your account
      </Header>
      { error ?
        <Message
          error
          header='Login failed'
          content={error}
        /> :
          null
      }
      <Form size='large' onSubmit={onSubmit}>
        <Segment stacked>
          <Form.Input
            fluid
            onChange={onChangeUser}
            value={form.username}
            icon='user'
            required
            iconPosition='left'
            placeholder='Username'
          />
          <Form.Input
            fluid
            onChange={onChangePassword}
            value={form.password}
            icon='lock'
            required
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

        <Button color='teal' type='submit' fluid size='large'>Login</Button>
      </Segment>
    </Form>
  </Grid.Column>
</Grid>
);


export default Login;
