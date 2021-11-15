import React , {Component} from "react";
import {Button, Modal, ModalHeader, ModalBody, Breadcrumb, BreadcrumbItem,  Label, Col, Row ,Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import {Loading} from './LoadingComponent';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


/* ######################################################### */
/* this button adds comment and the form */ 
/* ######################################################### */
export class CommentForm extends Component{

    constructor(props){
        super(props);
        this.state={
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }


    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      handleComment(val) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, val.rating, val.author ,val.comment);
    }

    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-submit -in fa-lg"></span> Submit Comment </Button>
                               
 
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> Submit Comment </ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(val)=> this.handleComment(val) }>
                    <Row className="form-group">
                                <Label  md={10}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={10}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="comment" md={10}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}



/* ######################################################### */
/* retrun the image the title and the description the dish */ 
/* ######################################################### */
    function RenderDish({dish}){

    if (dish!=null) {
        return(
            <div >
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

/* ######################################################### */
/* return all the comments and the comment added with <commentForm> */
/* ######################################################### */
function RenderComments({comments , addComment , dishId}){

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
    return (
        <div>
        <ul  key={comments.id}>
            {listcomment}
        </ul>
        <CommentForm dishId={dishId} addComment={addComment}/>
        </div>
        );

  }
  else{
    return(
        <div></div>
    )
}
}


/* ######################################################### */
/* the main function of Dishdetail */
/* ######################################################### */
  const Dishdetail = (props)=> {
    console.log(props.isloading);
    if (props.isloading) {
        return(
         <div className="container">
             <div className="row">
                 <Loading />
             </div>
         </div>
        );
     }
 
     if (props.errmsg) {
         return(
             <div className="container">
                 <div className="row">
                     <h4>{props.errmsg}</h4>
                 </div>
             </div>
         )
     }

    if (props.dish!=null) {
      return(
        <div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments} 
                addComment={props.addComment}
                dishId={props.dish.id}/>
            </div>
        </div>
        </div> 
      )
  }
  else{
      console.log('empty');
      return(
          <div></div>
      )
  }
  
}

export default Dishdetail;
