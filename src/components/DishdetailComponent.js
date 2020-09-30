import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom';

    function RenderDish({dish}) {
        if(dish != null) {
            return(
                <Card>
                    <CardImg width="100%" object src={dish.image}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardBody>{dish.description}</CardBody>
                    </CardBody>
                </Card>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }

    function RenderComments({comments}) {
        const c = comments.map((com) => {
            return (
                <ul className = "list-unstyled">
                    <li>{com.comment}</li>
                    <li>{com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</li>
                </ul>
            );
        });
        return (
            <div>
                <h4>Comments</h4>
                {c}
            </div>
        );
    }

    const DishDetail = (props) => {
        if(props.dish != null) {
            return (
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
                        <div className="col-12 col-md-5 mt-1">
                            <RenderDish dish = {props.dish} />
                        </div>
                        <div className="col-12 col-md-5 mt-1">
                            <RenderComments comments = {props.comments} />
                        </div>
                    </div>
                </div>
                
            );
        } else {
            return (
                <div></div> 
            );
        }
    }
        
    

export default DishDetail;