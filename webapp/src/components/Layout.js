import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

export default function Layout({ children }) {
  return (
    <Container>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={12}>
            { children }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
