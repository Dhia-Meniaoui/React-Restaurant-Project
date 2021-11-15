import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading} from './LoadingComponent';


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
        const Menu= props.dishes.dishes.map((dishes) => {
            return (
                <div key={dishes.id} className="col-12 col-md-5 m-1"> 
                    <RenderMenuItem dishes={dishes} onClick={props.onClick}></RenderMenuItem>
                </div>
            );
        });

        if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }

        else{
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
        );}
}

export default Menu;