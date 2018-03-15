import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Doors from '../components/Doors'
import { fetchDoors, openDoor } from '../redux/actions/doorsActions';
import { Loader } from 'semantic-ui-react';

class DoorsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchDoors();
  }

  render() {
    const { list, isLoading } = this.props;

    return (
      <div>
        { isLoading ?
          <Loader active data-test='loader'>Loading...</Loader> :
          <div>
            <Doors list={list} onOpen={this.props.openDoor} />
          </div>
        }
      </div>
    );
  }
}

DoorsContainer.propTypes = {
  list: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchDoors: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    list: state.doors.list,
    isLoading: state.doors.isLoading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDoors: () => dispatch(fetchDoors()),
    openDoor: ({ id }) => dispatch(openDoor({ id })),
  }
};

export { DoorsContainer as Component };
export default connect(mapStateToProps, mapDispatchToProps)(DoorsContainer);
