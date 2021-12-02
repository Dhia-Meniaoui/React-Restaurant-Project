import * as actionTypes from './ActionTypes';

export const Promotions = (state = {
    errMsg : null,
    isloading : true,
    promotions : [] 
}, action ) => {
    switch(action.type) {

        case actionTypes.ADD_PROMOS:
            return {...state , errMsg: null , isloading : false , promotions: action.payload }

        case actionTypes.PROMOS_FAILED: 
            return {...state , errMsg: action.payload}

        case actionTypes.PROMOS_LOADING:
            return {...state , errMsg: null , isloading : true , promotions : []}

        default: 
            return state;
    }
}

