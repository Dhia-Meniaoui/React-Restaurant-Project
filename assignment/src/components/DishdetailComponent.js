import React from 'react'
import { Card, CardImg,CardText,CardBody,CardTitle } from 'reactstrap';





    function RenderDish({dish}){
    if (dish!=null) {
        return(
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width='100%' src={dish.image} alt={dish.name} ></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

function RenderComments({comments}){

if (comments!=null) { 
    const listcomment = comments.map((comment)=>{
        return(<div><li> 
           <p> {comment.rating} </p>
           <p> {comment.comment}</p>
           <p> {comment.author}</p>
           <p> {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
            </li></div>
        )
    })
    return (<ul className="col-12 col-md-5 m-1" key={comments.id}>{listcomment}</ul>);

  }
  else{
    return(
        <div></div>
    )
}
}

  const Dishdetail = (props)=> {
    if (props.dish!=null) {
      return(
        <div className="container">
            <Card >
                <div className="row" >
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments= {props.dish.comments}/>              
                </div>
            </Card>     
        </div> 
      )
  }
  else{
      return(
          <div></div>
      )
  }
  
}

export default Dishdetail;
