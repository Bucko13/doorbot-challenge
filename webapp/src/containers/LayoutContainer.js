import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/userActions';
import Layout from '../components/Layout';

function LayoutContainer({ isLoggedIn, onLogout, children }) {
  return (
    <Layout onLogout={onLogout} isLoggedIn={isLoggedIn}>
      { children }
    </Layout>
  );
}

const mapStateProps = (state) => {
  return {
    isLoggedIn: !!state.user.username
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(logout())
  }
};

export default connect(mapStateProps, mapDispatchToProps)(LayoutContainer);
