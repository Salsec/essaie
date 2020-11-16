import React from 'react';
import {Card, ListGroup,ListGroupItem} from 'react-bootstrap';

import '../css/card_item.css';

const CardExample = () => {
  return (
    <div className="card mb-3">
    <div className="row no-gutters">
      <div className="col-6 col-md-6 col-lg-4 ">
        <img className="card-img-top" src={"./assets/img/photos/index2.png"} alt="Card image cap" className="img-thumbnail"/>
      </div>
      <div className="col-6 col-md-6 col-lg-8">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Plus...</small></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CardExample;