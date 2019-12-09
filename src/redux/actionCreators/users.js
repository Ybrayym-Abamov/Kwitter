import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { POSTUSER, DELETEUSER, UPDATEUSER, LOGOUT,GETUSER,GETUSERPICTURE } from "../actionTypes";
import { login } from "./auth";

const url = domain + "/users";

const _postUser = registerData => dispatch => {
  dispatch({ type: POSTUSER.START });

  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(registerData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: POSTUSER.FAIL, payload: err }));
    });
};

export const postUser = registerData => dispatch => {
  return dispatch(_postUser(registerData)).then(() =>
    dispatch(
      login({
        username: registerData.username,
        password: registerData.password
      })
    )
  );
};

export const deleteUser = () => (dispatch, getState) => {
  dispatch({ type: DELETEUSER.START });

  const { username, token } = getState().auth.login.result;

  return fetch(url + "/" + username, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETEUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: DELETEUSER.FAIL, payload: err }));
    })
    .then(() => {
      return dispatch({
        type: LOGOUT.SUCCESS,
        payload: { statusCode: 200 }
      });
    });
};

export const updateUser = updateData => (dispatch, getState) => {
  dispatch({ type: UPDATEUSER.START });
  
  const { username, token } = getState().auth.login.result;

  return fetch(url + "/" + username, {
    method: "PATCH",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(updateData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UPDATEUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: UPDATEUSER.FAIL, payload: err }));
    });
};

export const getUser = () => (dispatch, getState) => {
  dispatch({ type: GETUSER.START });
  const {username} = getState().auth.login.result;

  return fetch(url + "/" + username, {
    method: "GET",
    headers: { ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETUSER.FAIL, payload: err }));
    });
};

export const updateUserThenReloadUser = userData => dispatch => {
  return dispatch(updateUser(userData)).then(()=>dispatch(getUser()))
}

export const getUserPicture = (username) => (dispatch, getState) => {
  dispatch({ type: GETUSERPICTURE.START });
  debugger;
  return fetch(`${url}/${username}/picture`, {
    method: "GET",
    headers: { ...jsonHeaders }
  })
    .then(result => {
      debugger;
      return dispatch({
        type: GETUSERPICTURE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      debugger;
      return Promise.reject(dispatch({ type: GETUSERPICTURE.FAIL, payload: err }));
    });
};
