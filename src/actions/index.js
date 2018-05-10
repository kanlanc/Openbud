import * as types from  "../constants/ActionTypes";



// For decoding a token
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
};

export const SearchTerm=(term)=>{
    return({
        type:types.SearchTerm,
        term
    });
};