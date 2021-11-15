import React, { Component } from 'react'
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { addComment , fetchDishes} from '../redux/ActionCreators';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = dispatch => ({
  addComment: (dishId , rating , author , comment ) => dispatch(addComment(dishId , rating , author , comment )),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm :() => {dispatch(actions.reset('feedback'))}
});

class Main extends Component {

    constructor(props){
        super(props);
    }

    onDishselected(dishID){
        this.setState({ selectedDish: dishID });   
    }

    componentDidMount() {
      this.props.fetchDishes()
    }

  render() {
    
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isloading}
              dishesErrMess={this.props.dishes.errmsg}
              promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <Dishdetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0] } 
            isloading={this.props.dishes.isloading}
            errmsg={this.props.dishes.errmsg}   
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10)) } 
            addComment={this.props.addComment}/>
      );
    };

    return (
      <div>
        <Header></Header>
        <Switch>
            <Route path='/home' component={HomePage}/>
            <Route exact path='/contactus' component={() =>  <Contact resetFeedbackForm={this.props.resetFeedbackForm}/> }  />
            <Route exact path='/aboutus' component={()=> <About leaders={this.props.leaders}/>}  />
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route path='/menu' component={()=> <Menu dishes={this.props.dishes}/> }/>  
            <Redirect to='/home'/>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(Main));

