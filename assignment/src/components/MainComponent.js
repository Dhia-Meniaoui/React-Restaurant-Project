import React, { Component } from 'react'
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {

    constructor(props){
        super(props);
    }

    onDishselected(dishID){
        console.log('sdf');
        this.setState({ selectedDish: dishID });
        
    }


  render() {

    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      console.log('dhia');
      console.log(parseInt(match.params.dishId,10));
      return(
          <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0] } 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10)) } />
      );
    };

    return (
      <div>
        <Header></Header>
        <Switch>
            <Route path='/home' component={HomePage}/>
            <Route exact path='/contactus' component={Contact}  />
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

export default withRouter(connect(mapStateToProps)(Main));

