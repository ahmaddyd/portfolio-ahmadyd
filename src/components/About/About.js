import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./TechnologiesStack";
import Aboutcard from "./AboutCard";
import iconAbout from "../../Assets/images/about.png";
import Toolstack from "./Tools";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              EXECUTIVE <strong className="blue">SUMMARY</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={iconAbout} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Programming <strong className="blue">Language </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="blue">IDEA</strong> Technology
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
