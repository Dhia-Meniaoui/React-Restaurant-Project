import React from 'react';
import { Card, CardImg,CardImgOverlay,CardTitle } from 'reactstrap';

function RenderMenuItem({dishes , onClick}) {
    return(
        <Card onClick={() => onClick(dishes.id)}>
            <CardImg width='100%' src={dishes.image} alt={dishes.name}></CardImg>
            <CardImgOverlay>
                <CardTitle>{dishes.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}




    const Menu = (props)=>{
        const Menu= props.dishes.map((dishes) => {
            return (
                <div key={dishes.id} className="col-12 col-md-5 m-1"> 
                    <RenderMenuItem dishes={dishes} onClick={props.onClick}></RenderMenuItem>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {Menu}  
                </div>
            </div>       
        );
}

export default Menu;