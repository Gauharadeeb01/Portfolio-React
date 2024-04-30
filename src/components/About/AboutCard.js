import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gauhar Adeeb </span>
            from <span className="purple"> Araria, Bihar.</span>
            <br />
            I am currently persuing my bachelor in Computer science and engineering from Lovely professional University,jalandhar,Punjab.
            <br />
            I have completed Intermediate from College of commerece,Arts and Science,Patna(Bihar)
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Gauhar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
