import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import "./About.scss";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              En savoir plus sur<strong className="purple"> mon profil</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="à propos" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Les <strong className="purple">Technologies</strong> que j'utilise
        </h1>

        <Techstack />

        <h1 className="project-heading">
          Les <strong className="purple">Outils</strong> que j'utilise
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
