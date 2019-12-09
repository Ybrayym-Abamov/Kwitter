import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { POSTMESSAGE, GETUSERMESSAGES } from "../actionTypes";


const url = domain + "/messages";
// const url = domain + "/getUserMessages"

export const postMessage = (bodyMessage) => (dispatch, getState) => {
  dispatch({ type: POSTMESSAGE.START });

  const { token } = getState().auth.login.result;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(bodyMessage),
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: POSTMESSAGE.FAIL, payload: err }));
    });
};





export const getUserMessages = (username) => ( dispatch ) => {
  dispatch({ type: GETUSERMESSAGES.START });
  const endpointurl = username ? url + "?limit=20&username=" + username : url

  return fetch(endpointurl, {
    method: "GET",
    headers: jsonHeaders,
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETUSERMESSAGES.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETUSERMESSAGES.FAIL, payload: err }));
    });
};

export const postMessageThenReloadMessages = bodyMessage => dispatch => {
  return dispatch(postMessage(bodyMessage)).then(()=>dispatch(getUserMessages()))
}