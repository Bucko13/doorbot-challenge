import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import ResetPasswordContainer from './containers/ResetPasswordContainer';
import Doors from './containers/DoorsContainer';
import { Container, Grid } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={12}>
              <Switch>
                <Route path='/login' component={LoginContainer} />
                <Route path='/resetPassword' component={ResetPasswordContainer} />
                <Route path='/doors' component={Doors} />
                <Route render={() => <LoginContainer />} />
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
