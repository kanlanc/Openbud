import * as ActionType from "../constants/ActionTypes";
import axios from "axios";
import register from "./../registerServiceWorker";

// For decoding a token
function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
}


/**
 * The search bar terms typed 
 * @param Search terms 
 */
export const SearchTerm = term => {
  return {
    type: ActionType.SearchTerm,
    term
  };
};


/**
 * 
 * User Authentication
 */
export const LoginAction = (username, password) => dispatch => {
  const request = axios.post("/api/users/login", {
    username,
    password
  }).then(
    response => {
      dispatch(loginSuccess({username:response.data.username,token:response.data.token}));
      setTimeout(() => {
        dispatch(showMessage(response.data.message));
      }, 2000);
    },
    err => {
      dispatch(loginFailure(err));
    }
  );
};
export const RegisterAction = (username, password, email, name)=> dispatch => {
  axios.post("/api/users/register", {
    username,
    password,
    email,
    name
  }).then(
    response => {
      dispatch(loginSuccess({username:response.data.username,token:response.data.token}));
      setTimeout(() => {
        dispatch(showMessage(response.data.message));
      }, 2000);
    },
    err => {
      dispatch(loginFailure(err));
    }
  );  
};

export const loginSuccess = response => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: response
});
export const loginFailure = err => ({
  type: ActionType.LOGIN_FAILURE,
  payload: err,
  error: true
});
export const showMessage = msg => ({
  type: ActionType.SHOW_MESSAGE,
  payload: msg
});


/**
 * 
 */
