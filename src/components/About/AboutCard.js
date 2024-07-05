import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Halo! I'm{" "}
            <span className="blue">Ahmad Yulian Dinata </span>
            from <span className="blue"> North Bekasi, Indonesia.</span>
            <br /> I am an individual who possesses a deep reservoir of enthusiasm, a proven ability to work harmoniously within teams, an unyielding dedication to acquiring new knowledge, and the capacity to seamlessly adapt to dynamically changing situations. Moreover, I excel in managing pressure and navigating through uncertain circumstances with composure and proficiency.
            <br />
            <br />
            Aside from coding, here are some other things I like doing!
          </p>
          <ul>
           
            <li className="about-activity">🏸Badminton</li>
            <li className="about-activity">🤖Vacation</li>
          </ul>

          <i>
            <p style={{ color: "#0081c9" }}>
              "⚡ Fun fact I enjoy the sound of rain in the midst of a melancholy night. 🎶😄"{" "}
            </p>
          </i>
          <footer className="blockquote-footer">Built with ❤️</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
