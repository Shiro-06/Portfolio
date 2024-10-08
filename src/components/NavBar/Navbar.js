import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CgFileDocument } from "react-icons/cg";
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineMail } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa'; 
import { useTranslation } from 'react-i18next'; 
import "./NavBar.scss";
import "../../main.scss";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const { i18n } = useTranslation(); 

  useEffect(() => {
    const handleScroll = () => {
      setNavColour(window.scrollY >= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleExpand = () => setExpand(!expand);

  const changeLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setExpand(false);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleExpand}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link onClick={() => handleNavClick('home')}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Accueil
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleNavClick('about')}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> À propos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleNavClick('projects')}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projets
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleNavClick('resume')}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> CV
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleNavClick('contact')}>
                <AiOutlineMail style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={changeLanguage}>
                <FaGlobe style={{ marginBottom: "2px" }} /> {i18n.language === 'fr' ? 'EN' : 'FR'}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;