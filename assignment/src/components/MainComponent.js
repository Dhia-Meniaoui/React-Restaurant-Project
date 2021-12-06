import React, { Component } from 'react'
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { postComment , postFeedback, fetchDishes , fetchComments ,fetchPromos, fetchleaders} from '../redux/ActionCreators';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = dispatch => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  postFeedback: (firstname, lastname , contact  , email , feedback ) => dispatch(postFeedback(firstname, lastname , contact  , email , feedback )),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm :() => {dispatch(actions.reset('feedback'))},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
  fetchleaders: () => {dispatch(fetchleaders())}
});

class Main extends Component {

    constructor(props){
        super(props);
    }

    onDishselected(dishID){
        this.setState({ selectedDish: dishID });     
    }

    componentDidMount() {
      this.props.fetchDishes();
      this.props.fetchComments();
      this.props.fetchPromos(); 
      this.props.fetchleaders(); 
    }

  render() {
    
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isloading}
              dishesErrMess={this.props.dishes.errMsg}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promoloading={this.props.promotions.isloading}
              promoErrMess={this.props.promotions.errMsg}
              leader={this.props.leaders.leaders.filter((lead) => lead.featured)[0]}
              leadersloading={this.props.leaders.isloading}
              leadersErrMess={this.props.leaders.errMsg}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <Dishdetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0] } 
            isloading={this.props.dishes.isloading}
            errmsg={this.props.dishes.errmsg}   
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment}/>
      );
    };

    return (
      <div>
        <Header></Header>
        <TransitionGroup> 
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
        <Switch>
            <Route path='/home' component={HomePage}/>
            <Route exact path='/contactus' component={() =>  <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} /> }  />
            <Route exact path='/aboutus' component={()=> <About leaders={this.props.leaders}/>}  />
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route path='/menu' component={()=> <Menu dishes={this.props.dishes}/> }/>  
            <Redirect to='/home'/>
        </Switch>
        </CSSTransition>
        </TransitionGroup>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(Main));

