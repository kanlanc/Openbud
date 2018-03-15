import * as types from "../constants/ActionTypes";

const SearchTerm=(state=[],action)=>{
    console.log(action.type);
    switch (action.type) {
        case types.SearchTerm:
        console.log("I was here");
            return({...state,term:action.term});
            break;
    
        default:
        return state;
            break;
    }
}

export default SearchTerm;