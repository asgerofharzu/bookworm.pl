import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../Logo';
import  "./navHeader.css"
// import { BiSearch } from 'react-icons'


function NavHead() {
    return (
        <Navbar  className="nav-bar" bg="white" expand="lg">
            <Container >
                <Navbar.Brand href="#" className="logo"> <Logo/> </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto navs my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className="link link-1">Home</Nav.Link>
                        <Nav.Link href="#action2" className="link link-2">Catalog</Nav.Link>
                        <Nav.Link href="#action3" className="link link-3">Forum</Nav.Link>
                        
                    </Nav>
                    <div className="inputDiv">
                    <input className='input' type="text" placeholder="Find the book" />
                    </div>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavHead;