import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentUser } from '../redux/actions/userActions';
import { Loader } from 'semantic-ui-react';

class LoadUser extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
  }

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div>
        { this.props.isLoading ?
          <Loader active>Loading...</Loader> :
          this.props.children
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.user.isLoading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: () => dispatch(getCurrentUser())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadUser);
