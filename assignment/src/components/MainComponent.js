import React, { Component } from 'react'
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import {Route ,Switch, Redirect} from 'react-router-dom';



class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
          dishes: DISHES,
          comments: COMMENTS,
          promotions: PROMOTIONS,
          leaders: LEADERS
        };
    }

    onDishselected(dishID){
        console.log('sdf');
        this.setState({ selectedDish: dishID });
        
    }


  render() {

    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      console.log('dhia');
      console.log(parseInt(match.params.dishId,10));
      return(
          <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0] } 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10)) } />
      );
    };

    return (
      <div>
        <Header></Header>
        <Switch>
            <Route path='/home' component={HomePage}/>
            <Route exact path='/contactus' component={Contact}  />
            <Route exact path='/aboutus' component={()=> <About leaders={this.state.leaders}/>}  />
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route path='/menu' component={()=> <Menu dishes={this.state.dishes}/> }/>  
            <Redirect to='/home'/>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;

