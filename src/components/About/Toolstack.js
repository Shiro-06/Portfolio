import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiSwagger,
  SiWindows11,
  SiGithub

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
     <SiWindows11 title="Windows"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="Visual Studio Code"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack title="Slack"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiSwagger title="Swagger"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" /> 
      </Col>
    </Row>
  );
}

export default Toolstack;
