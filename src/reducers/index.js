import { combineReducers } from "redux";
// import users from "./usersReducer"
import SearchTerm  from './SearchBarReducer';
import AuthenticationReducer  from './AuthenticationReducer';


const index = combineReducers({
    term:SearchTerm,
    user:AuthenticationReducer,
    
});


export default index;