import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function AccessControl({ role, user, component: Component }) {
  if (role === 'user' && user.username) {
    return <Component />;
  }

  if (role === 'admin' && user.admin) {
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
    () => <ConnectedAccessControl role={'user'} component={Component}/>
  );
}

export function ifAdmin(Component) {
  return (
    () => <ConnectedAccessControl role={'admin'} component={Component}/>
  )
}
