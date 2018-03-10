import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Dimmer, Grid, Button, Header, Segment } from 'semantic-ui-react'

const Doors = ({ list, onOpen }) => {
  const available_doors = list.map((door) => (
    <Grid.Column width={3} key={door.id}>
      <Dimmer.Dimmable
        as={Segment}
        compact
        stacked
        blurring
        dimmed={door.opened}
        textAlign='center'>
        <Dimmer active={door.opened} inverted>
          <Header as='h3' icon>
            <Icon name='unlock' />
            Opened!
          </Header>
        </Dimmer>
        <Header as='h3'>{door.name}</Header>
        <Button
          onClick={() => onOpen(door)}
          color='teal'
          size='tiny'
        >
          Open
          </Button>
      </Dimmer.Dimmable>
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
  onOpen: PropTypes.func.isRequired,
};

export default Doors;
