import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { POSTUSER } from "../actionTypes";
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
  