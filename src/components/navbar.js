import {Navbar,Nav} from 'react-bootstrap';

import '../css/navbar.css';

export const Navbarre= ()=>{
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"><span color = 'red'>C</span><span color = 'red'>&amp;</span><span color = 'red'>P</span>  </Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Acceuil</Nav.Link>
                <Nav.Link href="#features">Programmes</Nav.Link>
                <Nav.Link href="#pricing">A propos</Nav.Link>
                </Nav>
                
            </Navbar>
            <div className='flag'></div>
        </>
    )
}

