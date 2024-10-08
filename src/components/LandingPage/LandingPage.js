import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ContactForm from "../ContactForm/ContactForm";
import Resume from "../Resume/ResumeNew";
import "./LandingPage.scss";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: false, // Permet aux animations de se déclencher à chaque défilement
    });
  }, []);

  const breakpointColumnsObj = {
    default: 1, // Change to 1 column for a single column layout
    1100: 1,
    700: 1
  };

  return (
    <div className="landing-page">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div id="home" className="masonry-item" data-aos="fade-up">
          <Home />
        </div>
        <div id="about" className="masonry-item" data-aos="fade-up">
          <About />
        </div>
        <div id="projects" className="masonry-item" data-aos="fade-up">
          <Projects />
        </div>
        <div id="resume" className="masonry-item" data-aos="fade-up">
          <Resume />
        </div>
        <div id="contact" className="masonry-item" data-aos="fade-up">
          <ContactForm />
        </div>
      </Masonry>
    </div>
  );
};

export default LandingPage;