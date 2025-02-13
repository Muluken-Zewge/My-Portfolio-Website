import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import profileImage from "../../Assets/profile-image.jpg";

function About() {

  const imageStyle = {
    width: "300px", 
    borderRadius: "15px", 
    transform: "rotate(5deg)", 
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
  };

  return (
    <Container fluid className="about-section" id="about">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={profileImage} alt="ProfileImage" style={imageStyle} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
