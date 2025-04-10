import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pravesh Mishra </span>
            from <span className="purple"> Prayagraj, India.</span>
            <br />
            I am currently a B.Tech final-year student specializing in Computer Science and Engineering.
            <br />
            I have a strong interest in Web Development, and I am passionate about building responsive and user-friendly applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, build with passion !"{" "}
          </p>
          <footer className="blockquote-footer">Pravesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
