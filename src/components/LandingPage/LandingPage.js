import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Element } from "react-scroll";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Resume from "../Resume/ResumeNew";
import "./LandingPage.css";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
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
        <Element name="home" className="masonry-item" data-aos="fade-up">
          <Home />
        </Element>
        <Element name="about" className="masonry-item" data-aos="fade-up">
          <About />
        </Element>
        <Element name="projects" className="masonry-item" data-aos="fade-up">
          <Projects />
        </Element>
        <Element name="resume" className="masonry-item" data-aos="fade-up">
          <Resume />
        </Element>
      </Masonry>
    </div>
  );
};

export default LandingPage;