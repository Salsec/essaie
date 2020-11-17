import {Container} from 'react-bootstrap';


import Carousels from './carousel';
import Cards from './cards';

function Acceuil() {
    return (
    <div className="App">
      <Carousels />
      <Container fluid>
        <Cards />
      </Container>       
      </div>
    );
  }

export default Acceuil;