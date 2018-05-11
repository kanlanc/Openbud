import { combineReducers } from "redux";
// import users from "./usersReducer"
import SearchTerm  from './SearchBarReducer';
import AuthenticationReducer  from './AuthenticationReducer';


const index = combineReducers({
    term:SearchTerm,
    isAuthenticated:false,
    currentUser: AuthenticationReducer,
});


export default index;