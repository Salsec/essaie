import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

import {Navbarre} from './components/navbar';
import Carousels from './components/carousel';
import CardExample from './components/card_items';
import Footer from './components/footer';


function App() {
  return (
  <div className="App">
    <Navbarre/>
    <Carousels />
    <Container fluid>
      <CardExample />
    </Container>

    <Footer />
     
    </div>
  );
}

export default App;
