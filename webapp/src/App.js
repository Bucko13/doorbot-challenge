import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import ResetPasswordContainer from './containers/ResetPasswordContainer';
import DoorsContainer from './containers/DoorsContainer';
import { ifLoggedIn } from './helpers/AccessControl';
import LayoutContainer from './containers/LayoutContainer';
import LoadUser from './containers/LoadUser';

class App extends React.Component {
  render() {
    return (
      <LayoutContainer>
        <LoadUser>
          <Switch>
            <Route path='/login' component={LoginContainer} />
            <Route path='/doors' component={ifLoggedIn(DoorsContainer)} />
            <Route path='/resetPassword' component={ResetPasswordContainer} />
            <Route render={() => <LoginContainer />} />
          </Switch>
        </LoadUser>
      </LayoutContainer>
    );
  }
}

export default App;
