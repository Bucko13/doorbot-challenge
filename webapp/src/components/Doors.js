import React from 'react';
import { Grid, Button, Header, Segment } from 'semantic-ui-react'

const Doors = ({ list }) => {
  const available_doors = list.map((door) => (
    <Grid.Column width={3} key={door.id}>
      <Segment compact textAlign='center'>
        <Header as='h3'>{door.name}</Header>
        <Button size='tiny'>Open</Button>
      </Segment>
    </Grid.Column>
  ));

  return (
    <Segment size='tiny' padded='very'>
      <Header as='h1'>Here are the doors you can open</Header>
      <p>You can open {list.length} doors at the moment</p>
      <Grid stackable stretched>
        <Grid.Row>
          { available_doors }
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default Doors;
