import { Login, Register } from "../actions";

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export default (state = [], action) => {
  switch (action.type) {
    case "Login":
      let username = setusernameandtoken(action);
      return {
        ...state,
        username: username,
        isAuthenticated: true
      };

    case "Register":
      username = setusernameandtoken(action);
      return {
        ...state,
        username: username,
        isAuthenticated: true
      };
    default:
      return state;
  }
};
function setusernameandtoken(action) {
  let username = "";
  const resolvedRequest = action.payload;
  resolvedRequest.then(resp => {
    // Set the token in the localstorage
    username = resp.data.username;
    localStorage.setItem("token", resp.data.token);
  });
  return username;
}
