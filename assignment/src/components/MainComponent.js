import React, { Component } from 'react'
import {Navbar , NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import {DISHES} from '../shared/dishes';



class Main extends Component {
    constructor(props){
        super(props);
        this.state =  {
            dishes : DISHES,
            selectedDish : null
        };
    }

    onDishselected(dishID){
        console.log('sdf');
        this.setState({ selectedDish: dishID });
        
    }

  render() {
    return (
      <div>
        <Header></Header>
        <Menu dishes={this.state.dishes}
        onClick={(dishId) => this.onDishselected(dishId)}/>
        <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;

