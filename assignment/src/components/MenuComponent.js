import React, { Component } from 'react';
import { Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';



class Menu extends Component {
    constructor(props){
        super(props);
        this.state =  {
            selectedDish : null
        };
    }

    /* to change the selected dish  */
    onDishSelect(dish){
        this.setState({selectedDish : dish});
    }

renderDish(dish){
    if (dish!=null) {
        return(
            <Card>
                <CardImg width='100%' src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card>
        )
    }
    else{
        return(
            <div><p>sdf</p></div>
        )
    }
}


    render(){

        const Menu= this.props.dishes.map((dishes) => {
            return (
                <div key={dishes.id} className="col-12 col-md-5 m-1"> 
                    <Card key={dishes.id} onClick={()=> this.onDishSelect(dishes)} >
                            <CardImg width='100%' src={dishes.image} alt={dishes.name}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dishes.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {Menu}  
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div> 
            </div>       
        );
    }
}

export default Menu;