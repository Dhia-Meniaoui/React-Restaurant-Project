import * as actionTypes from './ActionTypes';

export const Dishes = (state = {
    isloading: true,
    errMsg: null,
    dishes: []
    }, action ) => {
    switch(action.type) {

        case actionTypes.ADD_DISHES: 
            return {...state , isloading : false , errMsg : null, dishes: action.payload};

        case actionTypes.DISHES_LOADING: 
            return {...state , isloading : true , errMsg : null, dishes: []};

        case actionTypes.DISHES_FAILED:
            return {...state , isloading : false , errMsg : action.payload };

        default: 
            return state;
    }
};