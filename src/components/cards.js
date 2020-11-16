import React from 'react';
import CardExemple from './card_items';
import {Card, ListGroup,ListGroupItem} from 'react-bootstrap';

const Cards = () => {
    return(
        <div className = 'container-fluid'>
            <div className ='row'>
                <div className = 'col-sm-12 col-md-6 col-lg-6'>
                    <CardExemple />
                </div>
                <div className = 'col-sm-12 col-md-6 col-lg-6'>
                    <CardExemple />
                </div>
                <div className = 'col-sm-12 col-md-6 col-lg-6'>
                    <CardExemple />
                </div>
                <div className = 'col-sm-12 col-md-6 col-lg-6'>
                    <CardExemple />
                </div>
            </div>

        </div>
    )
}

export default Cards;