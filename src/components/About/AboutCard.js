import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
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
          <ul>
            <li className="about-activity">👾Reading Books</li>
            <li className="about-activity">🏸Badminton</li>
            <li className="about-activity">🤖Travelling</li>
          </ul>

          <i>
            <p style={{ color: "#0081c9" }}>
              "Suara ibu dirumah adalah berkah terbesar."{" "}
            </p>
          </i>
          <footer className="blockquote-footer">Ahmad Yulian</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
