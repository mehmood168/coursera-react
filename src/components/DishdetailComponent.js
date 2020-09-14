import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


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
                        <div className="col-12 col-md-5 mt-1">
                            <RenderDish dish = {props.dish} />
                        </div>
                        <div className="col-12 col-md-5 mt-1">
                            <RenderComments comments = {props.dish.comments} />
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