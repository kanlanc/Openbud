import * as types from "../constants/ActionTypes";
import axios from "axios";
import register from "./../registerServiceWorker";

// For decoding a token
function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
}

export const SearchTerm = term => {
  return {
    type: types.SearchTerm,
    term
  };
};
export const LoginAction = (username, password) => {
  // TODO: Send a request to the backend for the token
  const request = axios.post("/api/users/login", {
    username,
    password
  });
  // .then(function(response) {
  //   // TODO: if response.data.success is true
  //   console.log(response);
  return {
    type: types.Register,
    // username
    payload: request
  };
  // })
  // .catch(function(error) {
  //   // TODO: if response.data.success is false
  //   console.log(error);
  // });
};
export const RegisterAction = (username, password, email, name) => {
  // TODO: Send a request to the backend for the token
  const request = axios.post("/api/users/register", {
    username,
    password,
    email,
    name
  });

  // TODO: if response.data.success is true
  return {
    type: types.Register,
    payload: request
  };
};
