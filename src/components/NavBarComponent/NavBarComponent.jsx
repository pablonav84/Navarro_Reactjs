//import de logo y estilos
import "./NavBar.css"
import logo from '/logo2.jpeg'

//import de boostrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWitget from "../CartWitget/CartWitget";
import {Link} from "react-router-dom"
import { useCategory } from "../../hooks/useCategory";


const NavBarComponent = () => {
  
  const {category} = useCategory();
  
  return (
    <Navbar expand="lg" className="bg-style navbar-dark">
      <Container>
        <Link>
        <img src={logo} className="navbar-logo" alt="Zapas logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {category.map((item, index) => {
                return (
                  <NavDropdown.Item key={index} href="#action/3.1">
                    {item}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWitget/>
      </Container>
    </Navbar>
  )
}

export default NavBarComponent
