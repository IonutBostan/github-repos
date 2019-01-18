import React from 'react';
import { Container, Card } from 'reactstrap';

export const Home: React.SFC = () => (
  <Container>
    <Card body={true} inverse={true} color="info">
      <p className="h4">Gitgub profile search test</p>
      <p>To start searching, type a github profile in the search input from the above. For example <strong>danyeaw</strong>.</p>
    </Card>
  </Container>
)

