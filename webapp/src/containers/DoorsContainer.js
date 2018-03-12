import React from 'react';
import Doors from '../components/Doors'
import { connect } from 'react-redux';

class DoorsContainer extends React.Component {
  render() {
    return (
      <Doors list={this.props.list}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.doors.list
  }
};

export default connect(mapStateToProps)(DoorsContainer);
