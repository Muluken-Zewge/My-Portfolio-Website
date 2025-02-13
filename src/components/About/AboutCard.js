import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muluken Zewge </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />
            I am an enthusiastic Software Developer with a solid background in <span className="purple">programming principles </span> and <span className="purple">best practices.</span>
            <br/>
            I am currently employed as a <span className="purple">Mobile Application developer </span>at Two F Capital.
            <br />
            I have completed BSc degree in <span className="purple">Computer Engineering.</span>
            <br />
            
            Proficient in <span className="purple">Dart</span>, <span className="purple">Python</span>, and <span className="purple">Javascript</span>, I am always eager to learn new technologies and expand my skillset.
            </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Excellence is my benchmark!"{" "}
          </p>
          <footer className="blockquote-footer">Muluken</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
