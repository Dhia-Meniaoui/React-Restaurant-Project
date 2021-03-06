import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import {Loading} from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';


function RenderCard({item , isloading ,errmsg}) {
    if (isloading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if (errmsg) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{errmsg}</h4>
                </div>
            </div>
        )
    }
    else{

    return(
        <FadeTransform
        in
        transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
        <Card>
            <CardImg src={baseUrl + item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    </FadeTransform>
    );
    }
}
/******************************************************************************* */
function RenderCardp({item , isloading ,errmsg}) {
    if (isloading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if (errmsg) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{errmsg}</h4>
                </div>
            </div>
        )
    }
    else{

    return(
        <FadeTransform
        in
        transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
        <Card>
            <CardImg src={baseUrl + item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    </FadeTransform>
    );
    }
}
/************************************************************** */
function RenderCardl({item , isloading ,errmsg}) {
    if (isloading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if (errmsg) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{errmsg}</h4>
                </div>
            </div>
        )
    }
    else{

    return(
        <FadeTransform
        in
        transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
        <Card>
            <CardImg src={baseUrl + item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    </FadeTransform>
    );
    }
}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isloading={props.dishesLoading} errMess={props.dishesErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCardp item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCardl item={props.leader}  isLoading={props.promoLoading} errMess={props.promoErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;