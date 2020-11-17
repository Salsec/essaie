import React from 'react';
import {Card, ListGroup,ListGroupItem} from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import {BrowserRouter as Router,Link} from 'react-router-dom';

import '../css/card_item.css';

function CardExample(props) {
  return (
    <Router>
      <div class="card mb-3">
        <img className="card-img-top" src={"./assets/img/photos/placeholder.jpg"} alt="Card image cap" className="img-thumbnail"/>
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><Link to={"/"+props.name}>Plus...</Link></p>
        </div>
        </div>
    </Router>
    
  )
}

export default CardExample;