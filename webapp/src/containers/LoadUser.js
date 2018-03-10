import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../redux/actions/userActions';

class LoadUser extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div>
        { this.props.isLoading ?
          <b>Loading...</b> :
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