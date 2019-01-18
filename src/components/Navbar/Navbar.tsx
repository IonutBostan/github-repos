import React, { FormEvent } from 'react';
import {
  Navbar,
  NavbarBrand,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Container,
} from 'reactstrap';
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router";


import './Navbar.css'
import { fetchData } from '../../actions/user.actions';
import { connect } from 'react-redux';


export class NavbarComponent extends React.Component<RouteComponentProps<{}>> {

  private textInput = React.createRef<HTMLInputElement>()

  private onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.textInput && this.textInput.current) {
      if (this.textInput.current.value.length > 0) {
        this.props.history.push("/profile/" + this.textInput.current.value)
        this.textInput.current.value = ""
      }
    }
  }

  public render() {
    return (
      <div>
        <Navbar color="light" light>
          <Container>
            <NavbarBrand href="/">GitHubRepos</NavbarBrand>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <InputGroup>
                  <Input type="search" name="githubUser" id="githubUser" innerRef={this.textInput} placeholder="Search for a user"></Input>
                  <InputGroupAddon addonType="append">
                    <Button color="secondary"><i className="fa fa-search"></i></Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Form>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(NavbarComponent)
