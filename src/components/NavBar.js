import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaYoutube } from "react-icons/fa";

function BasicExample() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><FaYoutube /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#populares">Videos Populares</Nav.Link>
            <Nav.Link href="#comentarios">Comentarios</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            <NavDropdown title="Mis Listas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tips de Informatica</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Tips de Programacion</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Inteligencia Artificial</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Todas Las Listas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;