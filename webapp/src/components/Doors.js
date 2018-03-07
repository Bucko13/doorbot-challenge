import React from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react'

const Doors = ({ doors }) => {
  return (
    <Segment size='tiny' padded='very'>
      <Header as='h1'>Here are the doors you can open</Header>
    </Segment>
  )
}

export default Doors;
