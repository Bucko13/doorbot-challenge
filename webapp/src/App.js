import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import ResetPasswordContainer from './containers/ResetPasswordContainer';
import DoorsContainer from './containers/DoorsContainer';
import { ifLoggedIn } from './helpers/AccessControl';
import Layout from './components/Layout';
import LoadUser from './containers/LoadUser';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <LoadUser>
          <Switch>
            <Route path='/login' component={LoginContainer} />
            <Route path='/doors' component={ifLoggedIn(DoorsContainer)} />
            <Route path='/resetPassword' component={ResetPasswordContainer} />
            <Route render={() => <LoginContainer />} />
          </Switch>
        </LoadUser>
      </Layout>
    );
  }
}

export default App;
