import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function CarruselNovedades() {
  return (
    <Container>
      <Row>
        <Col>
          <Carousel aria-label="carrusel de Videos">
            <Carousel.Item>
              <img className="d-block" src="img/1.jpg" alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src="img/2.jpg" alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src="img/3.png" alt="" />
            </Carousel.Item>
            {/* Agrega más elementos Carousel.Item para otros productos */}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default CarruselNovedades;
