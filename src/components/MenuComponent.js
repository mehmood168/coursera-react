import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

    function RenderMenuItem({dish, onClick}) { // 1st way to define a functional component
        return(
            <Card onClick={() => onClick(dish.id)}>
                <CardImg width="100%" object src={dish.image}/>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    const Menu = (props) => { // 2nd way to define a functional component
        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
        
        
   

export default Menu;