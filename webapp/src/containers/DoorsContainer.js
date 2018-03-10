import React from 'react';
import PropTypes from 'prop-types';
import Doors from '../components/Doors'
import { connect } from 'react-redux';

function DoorsContainer({ list }) {
  return (
    <Doors list={list}/>
  )
}

DoorsContainer.propTypes = {
  list: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    list: state.doors.list
  }
};

export default connect(mapStateToProps)(DoorsContainer);
