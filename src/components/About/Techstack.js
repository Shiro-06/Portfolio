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
  SiRedux,
  SiBootstrap,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node JS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDb"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs title="Next JS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiSass title="Sass"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiCss3 title ="CSS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiHtml5 title="HTML"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiRedux title="Redux"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap title="Bootstrap" /> 
      </Col>
    </Row>
  );
}

export default Techstack;
