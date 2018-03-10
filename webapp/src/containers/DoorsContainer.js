import React from 'react';
import Doors from '../components/Doors'
import { connect } from 'react-redux';

function DoorsContainer({ list }) {
  return (
    <Doors list={list}/>
  )
}

const mapStateToProps = (state) => {
  return {
    list: state.doors.list
  }
};

export default connect(mapStateToProps)(DoorsContainer);
