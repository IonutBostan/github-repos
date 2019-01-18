import React from 'react';
import { Jumbotron, Button, Row, Col, Card, ListGroup, ListGroupItem } from 'reactstrap';
import Container from 'reactstrap/lib/Container';
import { Repos, Orgs } from '../../interfaces/user.interface';


interface IProps {
  orgs: Orgs[] | null;
  repos: Repos[] | null;
}

const UserDetails: React.SFC<IProps> = ({ orgs, repos }) => {
  if (!orgs || !repos) return null;
  return (
    <Container>
      <Row>
        <Col md="6" xs="12">
          <Card body={true} >
            <p className="h4">Repositories</p>
            <ListGroup>
              {repos.map(({ id, name }) => (
                <ListGroupItem key={id.toString()} href="#">{name}</ListGroupItem>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col md="6" xs="12">
          <Card body={true}>
            <p className="h3">Organisations</p>
            <ListGroup>
              {orgs.map(({ id, login }) => (
                <ListGroupItem key={id.toString()} href="#">{login}</ListGroupItem>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetails;