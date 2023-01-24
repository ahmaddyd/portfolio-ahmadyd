import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/svg/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaHackerrank } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMIT ME <span className="blue"> TO INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              ⚡Fun fact I am Falling in Love with Program 😄
              <br />
              <br /> 👑I’m previously working on
              <i>
                <b className="blue">
                  {" "}
                  Software Programmer at PT Hashmicro Solusi Indonesia
                </b>{" "}
                and{" "}
                <b className="blue">Android Developer at PT Presentologics </b>
              </i>
              <br />
              <br />
              👨‍💻My areas of expertise include developing new&nbsp;
              <i>
                <b className="blue">Front-End Web Developer and Mobile Apps </b>{" "}
                as well as{" "}
                <b className="blue">
                  Custom Odoo Module versions (Odoo 10 and Odoo 14)
                </b>
              </i>
              <br />
              <br />
              🌼I’m currently learning Frameworks, Courses
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Connect With Me</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ahmaddyd"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.hackerrank.com/ahmaddyd"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaHackerrank />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahmaddyd/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ahmaddyd"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
