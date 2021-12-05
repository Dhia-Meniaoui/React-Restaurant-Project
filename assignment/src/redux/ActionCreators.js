import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


/********************  to post comments  ****************/


export const postComment = (dishId, rating , author , comment )=> (dispatch) => {

    const newComment = {                                                    
        dishId : dishId,                                                    
        rating : rating,                                                    
        author : author,                                                    
        comment : comment                                                    
    };                                              
    newComment.date = new Date().toISOString();       

    return fetch(baseUrl + 'comments', {                                                    
        method: 'POST',                                                    
        body: JSON.stringify(newComment),                                                    
        headers: {                                                    
            'Content-Type': 'application/json'                                                    
        },                                                                       
        credentials: 'same-origin'                                                                       
    })                                                                       
        .then(Response => {                                                                       
            if(Response) {                                                                       
                return Response;
            }
            else { 
                var error = new Error('Error ' + Response.status + '' + ': '+ Response.statusText);
                error.reponse = Response;
                throw error; 
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(Response => Response.json())
        .then(Response => dispatch(addComment(Response)))
        .catch(error => {console.log('post comments '+error.message);}, alert('Your comment could not be posted'))

}

export const addComment = ( comment ) => ({
    type : ActionTypes.ADD_COMMENT,
    payload: comment  
});




/********************  to post feedback  ****************/


/* export const postFeedback = (dishId, rating , author , comment )=> (dispatch) => {

    const newComment = {                                                    
        dishId : dishId,                                                    
        rating : rating,                                                    
        author : author,                                                    
        comment : comment                                                    
    };                                              
    newComment.date = new Date().toISOString();       

    return fetch(baseUrl + 'comments', {                                                    
        method: 'POST',                                                    
        body: JSON.stringify(newComment),                                                    
        headers: {                                                    
            'Content-Type': 'application/json'                                                    
        },                                                                       
        credentials: 'same-origin'                                                                       
    })                                                                       
        .then(Response => {                                                                       
            if(Response) {                                                                       
                return Response;
            }
            else { 
                var error = new Error('Error ' + Response.status + '' + ': '+ Response.statusText);
                error.reponse = Response;
                throw error; 
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(Response => Response.json())
        .then(Response => dispatch(addComment(Response)))
        .catch(error => {console.log('post comments '+error.message);}, alert('Your comment could not be posted'))

}

export const addComment = ( comment ) => ({
    type : ActionTypes.ADD_COMMENT,
    payload: comment  
});
 */
/********************  for dishes and comments  ****************/
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesloading());

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else { 
                var error = new Error('Error ' + response.status + '' + ': '+ response.statusText);
                error.reponse = response;
                throw error; 
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(Response => Response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesfailed(error.message)))
}

export const fetchComments = () => (dispatch) => {
    dispatch(dishesloading());

    return fetch(baseUrl + 'comments')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else { 
                var error = new Error('Error ' + response.status + '' + ': '+ response.statusText);
                error.reponse = response;
                throw error; 
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })        
        .then(Response => Response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsfailed(error.message)))
}

export const dishesloading = () => ({
    type : ActionTypes.DISHES_LOADING
});

export const dishesfailed = (errmss) => ({
    type : ActionTypes.DISHES_FAILED,
    payload: errmss
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const commentsfailed = (errmss) => ({
    type : ActionTypes.COMMENTS_FAILED,
    payload: errmss
});

/********************  for pormotion ****************/
export const fetchPromos = () => (dispatch) => {
    dispatch(promosloading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error '+response.status+': '+response.statusText);
                error.response = response;
                throw error;
            }
        },
        error=>{
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(promotions => dispatch(addPromos(promotions)))
        .catch(error => {dispatch(promosfailed(error))})
}

export const promosloading = () => ({
    type : ActionTypes.PROMOS_LOADING
});

export const promosfailed = (errmss) => ({
    type : ActionTypes.PROMOS_FAILED,
    payload: errmss
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

/********************  for LEADERS  ****************/
export const fetchleaders = () => (dispatch) => {
    dispatch(leadersloading());

    return fetch(baseUrl + 'leaders')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error '+response.status+': '+response.statusText);
                error.response = response;
                throw error;
            }
        },
        error=>{
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(leaders => dispatch(addleaders(leaders)))
        .catch(error => {dispatch(promosfailed(error))})
}

export const leadersloading = () => ({
    type : ActionTypes.LEADERS_LOADING
});

export const leadersfailed = (errmss) => ({
    type : ActionTypes.LEADERS_FAILED,
    payload: errmss
});

export const addleaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});
