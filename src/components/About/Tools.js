import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiHackerrank,
  SiAndroidstudio,
  SiVisualstudiocode,
  SiIntellijidea,
  SiAdobexd,
} from "react-icons/si";

function Tools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHackerrank />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd />
      </Col>
    </Row>
  );
}

export default Tools;
