import * as actionTypes from './ActionTypes';

export const Dishes = (state = {
    isloading: true,
    erMess: null,
    dishes: []
    }, action ) => {
    switch(action.type) {

        case actionTypes.ADD_DISHES: 
            return {...state , isloading : false , errMess : null, dishes: action.payload};

        case actionTypes.DISHES_LOADING: 
            return {...state , isloading : true , errMess : null, dishes: []};

        case actionTypes.DISHES_FAILED:
            return {...state , isloading : false , errMess : action.payload };

        default: 
            return state;
    }
};