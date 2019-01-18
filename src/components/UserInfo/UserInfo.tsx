import React from 'react';
import { Jumbotron, Button, Row, Col, Card, CardBody } from 'reactstrap';
import Container from 'reactstrap/lib/Container';
import { User } from '../../interfaces/user.interface';


interface IProps {
  user: User | null;
}

const UserInfo: React.SFC<IProps> = ({ user }) => {
  if (!user) return null
  const { login, bio, name, company } = user
  return (
    <Container>
      <Card body={true} inverse={true} color="info">
        <p className="h4">{login}</p>
        <p>{bio}</p>
        <Row>
          <Col xs="3"><strong>Name</strong></Col>
          <Col>{name}</Col>
        </Row>
        <Row>
          <Col xs="3"><strong>Company</strong></Col>
          <Col>{company}</Col>
        </Row>
      </Card>
    </Container>
  );
};

export default UserInfo;