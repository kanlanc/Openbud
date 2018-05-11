import * as ActionType from "../constants/ActionTypes";

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export default (state = [], action) => {
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        username: action.payload.username,
        isAuthenticated: true
      };
      break;
    case ActionType.LOGIN_FAILURE:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: false
      };
    case ActionType.SHOW_MESSAGE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
