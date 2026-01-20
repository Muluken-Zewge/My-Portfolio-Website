import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiMongodb,
  DiAndroid,
  DiAppstore

} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiPostgresql,
  SiFlutter,
  SiDart,
  SiPython,
  SiMysql,
  SiGo,
  SiDocker,
  SiLeetcode
} from "react-icons/si";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaApple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <FaGooglePlay />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAppstore />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLeetcode />
      </Col>
    </Row>
  );
}

export default Techstack;
