import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket,faUserPlus,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';




function NavScroll() {
  return (
    
    <Navbar expand="lg" className="bg-secondary-subtle sticky-top py-4 fs-5">
      <div className='container-lg container-xl'>

      
        <Navbar.Brand href="#" className='fs-3 fw-bold'>E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse className='gap-4 justify-content-evenly ' id="navbarScroll">   
            <Nav
                className=" my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#action2"> product</Nav.Link>
                <Nav.Link href="/AboutePage">About</Nav.Link>
                <Nav.Link href="/contactus">Contact</Nav.Link>                
            </Nav>
            <Form className="d-flex gap-3">
                <div className="flex-fill w-30">
                <Link to="/login">
                  <Button variant="outline-success" className=" px-2">
                    <FontAwesomeIcon icon={faRightToBracket} className="pe-2" />Log in
                  </Button>
                  </Link>
                </div>
                
                <div className="flex-fill w-30">
                <Link to="/register">
                  <Button variant="outline-success" className="">
                    <FontAwesomeIcon icon={faUserPlus} className="pe-2" />Register
                  </Button>
                  </Link>
                </div>
                <div className="flex-fill w-30">
                  <Button variant="outline-success" className=" px-2">
                    <FontAwesomeIcon icon={faCartShopping} className="pe-2" />Cart
                  </Button>
                </div>
          </Form>

        </Navbar.Collapse>
        </div>
    </Navbar>
    
  );
}

export default NavScroll;