import React from 'react';
import PropTypes from 'prop-types';
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
          data-test='error'
          error
          header='Login failed'
          content={error}
        /> :
          null
      }
      <Form size='large' onSubmit={onSubmit} data-test='form'>
        <Segment stacked>
          <Form.Input
            fluid
            onChange={onChangeUser}
            data-test='username'
            value={form.username}
            icon='user'
            required
            iconPosition='left'
            placeholder='Username'
          />
          <Form.Input
            fluid
            onChange={onChangePassword}
            data-test='password'
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

Login.propTypes = {
  form: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }),
  onChangeUser: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Login;
