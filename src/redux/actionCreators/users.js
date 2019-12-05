import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { POSTUSER,PATCHUSER } from "../actionTypes";
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

  const _patchUser = userData => dispatch => {
    dispatch({ type: POSTUSER.START });
  
    return fetch(`${url}/${userData.username}`, {
      method: "PATCH",
      headers: jsonHeaders,
      body: JSON.stringify(userData)
    })
      .then(handleJsonResponse)
      .then(result => {
        return dispatch({
          type: PATCHUSER.SUCCESS,
          payload: result
        });
      })
      .catch(err => {
        return Promise.reject(dispatch({ type: PATCHUSER.FAIL, payload: err }));
      });
  };
  
  export const patchUser = userData => dispatch => {
    return dispatch(_patchUser(userData));
  };
  