import * as types from "../constants/ActionTypes";

const SearchTerm=(state=[],action)=>{
    switch (action.type) {
        case types.SearchTerm:
            return({...state,term:action.term});
            break;
    
        default:
        return state;
            break;
    }
}

export default SearchTerm;