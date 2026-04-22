import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>E=commerce &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
