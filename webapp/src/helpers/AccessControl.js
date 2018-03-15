import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function AccessControl({ userRole, user, component: Component }) {
  if (userRole === 'user' && user.username) {
    return <Component />;
  }

  if (userRole === 'admin' && user.admin) {
    return <Component />;
  }

  return <Redirect to='/login' />
}

const mapStateToProps = function(state) {
  return {
    user: state.user
  }
}

const ConnectedAccessControl = connect(mapStateToProps)(AccessControl);

export function ifLoggedIn(Component) {
  return (
    () => <ConnectedAccessControl userRole={'user'} component={Component}/>
  );
}

export function ifAdmin(Component) {
  return (
    () => <ConnectedAccessControl userRole={'admin'} component={Component}/>
  )
}
