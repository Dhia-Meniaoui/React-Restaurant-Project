import * as actionTypes from './ActionTypes';

export const Leaders = (state = {
    isloading: true,
    errMsg: null,
    leaders: []
    }, action ) => {
    switch(action.type) {

        case actionTypes.ADD_LEADERS: 
            return {...state , isloading : false , errMsg : null, leaders: action.payload};

        case actionTypes.LEADERS_LOADING: 
            return {...state , isloading : true , errMsg : null, leaders: []};

        case actionTypes.LEADERS_FAILED:
            return {...state , isloading : false , errMsg : action.payload };

        default: 
            return state;
    }
};