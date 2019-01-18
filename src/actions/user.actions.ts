import { getRepos, getUserData } from '../services/github-api';


export const types = {
  USER_DATA: "USER_DATA",
  USER_REPOS: "USER_REPOS",
}

export const fetchData = (user: string) => (dispatch: any) => {
  dispatch(fetchUserData(user));
  dispatch(fetchUserRepos(user));
}

export const fetchUserData = (user: string) => {
  return (dispatch: any) => {
    dispatch({
      type: types.USER_DATA + "_REQUEST",
    });

    getUserData(user).then(response =>
      dispatch({
        type: types.USER_DATA + "_SUCCESS",
        payload: response
      }),
      error =>
        dispatch({
          type: types.USER_DATA + "_FAILURE",
          payload: error
        }))
  }
}

export const fetchUserRepos = (user: string) => {
  return (dispatch: any) => {
    dispatch({
      type: types.USER_REPOS + "_REQUEST",
    });

    getRepos(user).then(response =>
      dispatch({
        type: types.USER_REPOS + "_SUCCESS",
        payload: response
      }),
      error =>
        dispatch({
          type: types.USER_REPOS + "_FAILURE",
          payload: error
        }))
  }
}

