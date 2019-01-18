import React from 'react';
import { Card, Container } from 'reactstrap';

const FetchingError: React.SFC = () => (
  <Container>
    <Card body={true} inverse={true} color="info">
      <p className="h4">Data fetching error</p>
      <p>There was an error retriving the information. Please try again with another github user.</p>
    </Card>
  </Container>
);

export default FetchingError;