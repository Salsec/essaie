import React from 'react';
import {Card, ListGroup,ListGroupItem} from 'react-bootstrap';

import '../css/card_item.css';

const CardExample = () => {
  return (
    <div class="card mb-3">
      <img className="card-img-top" src={"./assets/img/photos/placeholder.jpg"} alt="Card image cap" className="img-thumbnail"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  )
}

export default CardExample;