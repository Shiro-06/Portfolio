import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Home.scss";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             <span className="purple"> Présentation </span>
            </h1>
            <p className="home-about-body">

              <br />Récemment diplômé en tant qu'
              <i><b className="purple">Intégrateur Front-End </b></i>
               formé en ligne par OpenClassrooms,
               <br /> je suis devenu passionné par le développement web
                et la découverte de nouvelles technologies.
              <br />
              <br />
              Mes domaines d'intérêt professionnels sont  &nbsp;
              <i>
                <b className="purple">la création de nouveaux design, découvrir de nouvelles méthodes pour 
                  améliorer l'expérience et l'interface utilisateur </b> et
                également découvrir de nouvelles façons d'utiliser les innovations liées à l'intelligence artificielle
                 dans le but d'améliorer les performances de développement.{" "}
                <b className="purple">
                  
                </b>
              </i>
              <br />
              <br />
              Chaque fois que possible, même dans ma vie personnel, j'applique également ma passion pour développer des applications Web
              avec <b className="purple">Node.js</b> et des
              <i>
                <b className="purple">
                  {" "}
                  Bibliothèques et Frameworks Javascript Modernes
                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> React.js, Next.js et Redux.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Où me trouver ?</h1>
            <p>
              Vous pouvez me retrouver sur les <span className="purple">réseaux </span> suivants :
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Shiro-06"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bastien-suppa-04b517264/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
