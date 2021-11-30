import * as ActionTypes from './ActionTypes';

export const Promotions = (state = {
    errMsg : null,
    promotions : [],
    isloading : false 
}, action ) => {
    switch(action.type) {

        case ActionTypes.ADD_PROMOS:
            return {...state , errMsg: null , promotions: action.payload , isloading : false}

        case ActionTypes.PROMOS_FAILED: 
            return {...state , errMsg: action.payload}

        case ActionTypes.PROMOS_LOADING:
            return {...state , errMsg: null , isloading : true , promotions : []}

        default: 
            return state;
    }
}

