import * as types from  "../constants/ActionTypes";


export const SearchTerm=(term)=>{
    return({
        type:types.SearchTerm,
        term
    });
};