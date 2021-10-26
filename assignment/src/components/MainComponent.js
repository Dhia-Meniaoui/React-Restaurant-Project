import React, { Component } from 'react'
import {Form, Navbar , NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
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

    return (
      <div>
        <Header></Header>
        <Switch>
            <Route path='/home' component={HomePage}/>
            <Route exact path='/contactus' component={Contact}  />
            <Route path='/menu' component={()=> <Menu dishes={this.state.dishes}/> }/>  
            <Redirect to='/home'/>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;

