import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import { SiRedux, SiSwagger } from "react-icons/si";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import "./Projects.scss";

const techIcons = {
  html5: <FaHtml5 />,
  css3: <FaCss3Alt />,
  javascript: <FaJs />,
  react: <FaReact />,
  nodejs: <FaNodeJs />,
  sass: <FaSass />,
  redux: <SiRedux />,
  swagger: <SiSwagger />,
  backend: <FaNodeJs /> 
};

function ProjectCards(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="project-card-view" onClick={handleShow}>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Button variant="primary" href={props.ghLink} target="_blank" onClick={(e) => e.stopPropagation()}>
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
              onClick={(e) => e.stopPropagation()}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
          <div className="tech-stack">
            {props.techStack.map((tech, index) => (
              <Button key={index} variant="outline-primary" className={`tech-button ${tech}`}>
                {techIcons[tech]} &nbsp; {tech.toUpperCase()}
              </Button>
            ))}
          </div>
        </Card.Body>
      </Card>

      <Modal className="custom-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.carouselImages && props.carouselImages.length > 0 ? (
            <Carousel>
              {props.carouselImages.map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={image} alt={`slide ${index}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <p>No images available</p>
          )}
          <p>{props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCards;