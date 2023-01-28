import React from "react";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1250"
            style={{ textAlign: "justify" }}
          >
            Heyy Everyone!, I'm{" "}
            <span className="blue">Ahmad Yulian Dinata </span>
            from <span className="blue"> North Bekasi, Indonesia.</span>
            <br />I am an Informatics Engineering graduate. Work experience and
            a strong interest in Product Owner, Front-End Web Developer, Android
            Development, Odoo Dev, and IT Consultant.
            <br />
            <br />
            Aside from coding, here are some other things I like doing!
          </p>
          <ul
            data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-duration="1250"
          >
            <li className="about-activity">👾Reading Books</li>
            <li className="about-activity">🏸Badminton</li>
            <li className="about-activity">🤖Travelling</li>
          </ul>

          <i>
            <p
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1250"
              style={{ color: "#0081c9" }}
            >
              "Suara ibu dirumah adalah berkah terbesar."{" "}
            </p>
          </i>
          <footer
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1250"
            className="blockquote-footer"
          >
            Ahmad Yulian
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

AOS.init();
export default AboutCard;
