import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,

} from "react-icons/di";
import {
  SiNextdotjs,
  SiSass,
  SiCss3,
  SiHtml5,
  SiRedux
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiRedux />
      </Col>
    </Row>
  );
}

export default Techstack;
