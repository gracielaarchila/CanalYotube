import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from 'react-bootstrap/NavDropdown';

function AlignmentExample() {
  return (
    <Container id="footer" className="footer">
      <Row className="g">
        <Col>
          <Nav className="justify-content-center" activeKey="/home">
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
          <p className="copyright text-center mt-4 mb-4">
            Diseñada y Programada por:Graciela Archila
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AlignmentExample;
