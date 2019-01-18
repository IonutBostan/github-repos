import React from 'react';
import { UserInfo, UserDetails, LoadingOverlay, FetchingError } from '../components';
import { getRepos, getUserData } from '../services/github-api'
import { connect } from "react-redux";
import { getUserDataRes, getUserReposRes } from '../reducers';
import { fetchData } from '../actions/user.actions';
import { User, Orgs, Repos } from '../interfaces/user.interface';
import { withRouter, RouteComponentProps } from 'react-router';

interface IProps {
  fetchData: (name: string) => Promise<any>;
  userDataRes: {
    payload: {
      user: User;
      orgs: Orgs[];
    } | null;
    isFetching: boolean;
    error: Error;
  };
  userReposRes: {
    payload: Repos[] | null;
    isFetching: boolean;
    error: Error;
  };
}

interface IURLParams {
  username: string;
}


export class Profile extends React.Component<RouteComponentProps & IProps> {

  componentDidMount() {
    const { username } = this.props.match.params as IURLParams
    this.props.fetchData(username);
  }

  componentWillReceiveProps(nextProps: RouteComponentProps & IProps) {
    const { username } = this.props.match.params as IURLParams
    const { username: nextUsername } = nextProps.match.params as IURLParams
    if (username != nextUsername) {
      this.props.fetchData(nextUsername);
    }
  }

  render() {
    let { userDataRes, userReposRes } = this.props;
    if (userDataRes.error && userReposRes.error) return <FetchingError />
    return (
      <div>
        <UserInfo user={userDataRes.payload && userDataRes.payload.user} />
        <UserDetails
          orgs={userDataRes.payload && userDataRes.payload.orgs}
          repos={userReposRes.payload} />
        <LoadingOverlay show={userDataRes.isFetching && userReposRes.isFetching} />

      </div>
    );
  }
}




export default connect<any, any, any>(
  (state: any) => ({
    userDataRes: getUserDataRes(state),
    userReposRes: getUserReposRes(state)
  }),
  { fetchData }
)(withRouter(Profile));
