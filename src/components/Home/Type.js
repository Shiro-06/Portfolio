import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.scss";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Developer",
          "Freelancer",
          "Web Integrator",
          "UI/UX Designer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
