import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Fa500Px } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';


function AutoLayoutExample() {
  return (
<header id='home'  className="App-header">
    <Container>
      <Row>
        <Col>
      <Tooltip title="Volver al Home" arrow>
        <a href="/">  
          <Image src="img/logo.png" rounded />
        </a>
      </Tooltip>
        </Col>
        <Col><Fa500Px /></Col>
        <Col>
        <Tooltip title="Suscribirse" arrow>
        <a href="http://bit.ly/45881Zb">
          <Button>
            SUSCRIBETE
          </Button>
          </a>
          </Tooltip>
        </Col>
      </Row>
    </Container>
    </header>
  );
}

export default AutoLayoutExample;
