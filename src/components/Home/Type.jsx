import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.scss";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur Front-End",
          "Freelance",
          "Intégrateur Web",
          "Développeur React",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
