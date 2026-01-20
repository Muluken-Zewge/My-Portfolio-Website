import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Muluken Zewge, </span>
             a Software Engineer with a solid background in <span className="purple">programming principles </span> and <span className="purple">best practices.</span>
            <br />
           
            I am currently employed as a <span className="purple">Mobile Application developer </span>at <a href="https://2f-capital.com/" target="_blank" rel="noreferrer">Two F Capital</a>.
            <br />
            I have completed BSc degree in <span className="purple">Computer Engineering</span>, followed by an intensive <span className="purple">Andvanced Algorithms and Software Development</span> education from the renowned <a href="https://a2sv.org/" target="_blank" rel="noreferrer">A2SV(Africa To Silicon Valley)</a>. 
            <br />
            
            Proficient in <span className="purple">Dart</span>, <span className="purple">Python</span>, and <span className="purple">Go</span>, I am always eager to learn new technologies and expand my skillset.
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
