import { combineReducers } from "redux";
// import users from "./usersReducer"
import SearchTerm  from './SearchBarReducer';

const index = combineReducers({
    term:SearchTerm
});


export default index;