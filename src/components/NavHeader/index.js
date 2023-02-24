import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo';
import "./navHeader.css"
import { BiSearch, BiUserCircle, BiChevronDown } from 'react-icons/bi'
import   {FaRegHeart} from "react-icons/fa";
import   {BsBasket3} from "react-icons/bs";



function NavHead() {
    return (
        <Navbar className="nav-bar" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className="logo"> <Logo /> </Navbar.Brand>

                <Nav
                    className="me-auto navs my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}

                >
                    <Nav.Link href="#action1" className="link link-1">Home</Nav.Link>
                    <Nav.Link href="#action2" className="link link-2">Catalog</Nav.Link>
                    <Nav.Link href="#action3" className="link link-3">Forum</Nav.Link>

                </Nav>
                <span className='search-icon'> <BiSearch size="1.2rem" /> </span>
                <input className='input' type="text" placeholder="Find the book" />
                

                <div className='icons'>
                    <FaRegHeart size="1.5rem" className="icon" />
                    <BsBasket3 size="1.4rem" className='icon basket' />
                    <BiUserCircle size="1.5rem" className='icon user' />
                    <BiChevronDown size="1.1rem" className='icon down'/>
                </div>

            </Container>

        </Navbar>
    );
}

export default NavHead;