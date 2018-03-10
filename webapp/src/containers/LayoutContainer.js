import React from 'react';
import PropTypes from 'prop-types';
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

LayoutContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

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
