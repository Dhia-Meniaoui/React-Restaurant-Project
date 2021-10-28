import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderMenuItem({dishes , onClick}) {
    return(
        <Card> 
            <Link to={`/menu/${dishes.id}`} >
            <CardImg width='100%' src={dishes.image} alt={dishes.name}></CardImg>
            <CardImgOverlay>
                <CardTitle>{dishes.name}</CardTitle>
            </CardImgOverlay>
            </Link>
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
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {Menu}
                </div>
            </div>      
        );
}

export default Menu;