import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Container, Grid } from 'semantic-ui-react';

function Layout({ onLogout, children, isLoggedIn }) {
  return (
    <Container>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={16}>
            <Menu fixed='top' inverted>
              { isLoggedIn ?
                <Container data-test='logged-in-header'>
                  <Menu.Item as='p' header>
                    Doorbot
                  </Menu.Item>
                  <Menu.Item as='a' active>Doors</Menu.Item>
                  <Menu.Item as='a' position='right' onClick={onLogout}>Logout</Menu.Item> :
                </Container> :
                <Container data-test='logged-out-header'>
                  <Menu.Item as='p' header>
                    Doorbot
                  </Menu.Item>
                  <Menu.Item as='a' position='right' active data='login-menu'>Login</Menu.Item>
                </Container>
              }
            </Menu>
          </Grid.Column>
          <Grid.Column width={16} style={ {marginTop: '70px'} }>
            { children }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

Layout.propTypes = {
  onLogout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default Layout;
