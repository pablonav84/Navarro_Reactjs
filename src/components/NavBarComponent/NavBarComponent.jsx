//import de logo y estilos
import "./NavBar.css";
import logo from "/logo2.jpeg";

//import de boostrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";


const NavBarComponent = () => {
  

  return (
    <Navbar expand="lg" className="bg-style navbar-dark">
      <Container>
        <Link to="/">
          <img src={logo} className="navbar-logo" alt="Zapas logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/create-product">Nuevo Producto</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
