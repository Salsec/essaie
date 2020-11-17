import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import {Navbarre} from './components/navbar';
import Footer from './components/footer';
import Acceuil from './components/accueil';
import Roch from './components/roch';


function App() {
  return (
    <Router>
      <Navbarre/>
      <Switch>
        <Route path='/' exact component={Acceuil}/>
        <Route path='/roch' exact component={Roch}/>
      </Switch>
      <Footer />
    </Router>
  
  );
}

export default App;
