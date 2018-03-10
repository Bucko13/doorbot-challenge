import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Header, Segment } from 'semantic-ui-react'

const Doors = ({ list }) => {
  const available_doors = list.map((door) => (
    <Grid.Column width={3} key={door.id}>
      <Segment compact stacked textAlign='center'>
        <Header as='h3'>{door.name}</Header>
        <Button color='teal' size='tiny'>Open</Button>
      </Segment>
    </Grid.Column>
  ));

  return (
    <Segment size='tiny' padded='very'>
      <Header as='h1'>Doors control</Header>
      <p>You have access to these {list.length} doors:</p>
      <Grid stackable stretched>
        <Grid.Row>
          { available_doors }
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

Doors.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Doors;
