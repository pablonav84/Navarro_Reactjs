//import de logo y estilos
import "./NavBar.css"
import logo from '/logo2.jpeg'
import "../CartWitget/CartWitget"

//import de boostrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWitget from "../CartWitget/CartWitget";

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-style navbar-dark">
      <Container>
        <Navbar.Brand href="#Inicio">
        <img src={logo} className="navbar-logo" alt="Zapas logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Inicio">Inicio</Nav.Link>
            <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
            <NavDropdown title="Menú" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWitget/>
      </Container>
    </Navbar>
  )
}

export default NavBarComponent
