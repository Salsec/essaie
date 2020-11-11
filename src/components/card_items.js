import React from 'react';
import {Card, ListGroup,ListGroupItem} from 'react-bootstrap';

import '../css/card_item.css';

const CardExample = () => {
  return (
    <div class="card_item">
        <img class="card-img-top" src={"./assets/img/carousel/placeholder.png"} alt="Card image cap" class="img-thumbnail"/>
        
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                </div>
            </li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        
        <div class="card-footer bg-dark">
            <small class="text-white">Plus...</small>
        </div>
    </div>
  )
}

export default CardExample;