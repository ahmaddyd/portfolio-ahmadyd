import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { Player } from "@lottiefiles/react-lottie-player";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaHackerrank } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMIT ME <span className="blue"> TO INTRODUCE </span> MYSELF
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="1500"
              className="home-about-body"
            >
              💕  I’m work on Information Technology x Human Resource at Perum Perumnas
              <br />
              <br />
              📫 How to reach me ahmdyulian.86@gmail.com
              <br />
              <br /> 👑I’m previously internship on
              <i>
                <b className="blue">
                  {" "}
                  Software Programmer at PT Hashmicro Solusi Indonesia
                </b>{" "}
                and part of{" "}
                <b className="blue">Studi Independen Bersertifikat (SIB) Android Developer at PT Presentologics </b>
              </i>
              <br />
              <br />
              🤖 Ask me about CodeIgniter, PHP Framework, UI Design, Python
              <br />
              <br />
              🌼I’m currently learning Frameworks, Courses, Soft Skills
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <Player
                src="https://assets6.lottiefiles.com/packages/lf20_ofa3xwo7.json"
                loop
                autoplay
              />
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

AOS.init();
export default Home2;
