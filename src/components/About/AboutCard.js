import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je m'appelle <span className="purple">Suppa Bastien </span>
            j'ai 30 ans et je viens de <span className="purple"> Nice, en France.</span>
            <br />
            Je suis actuellement à la recherche d'un emploi (ou mission) en tant que <span className="purple">développeur Front-End.</span>
            <br />
            À la suite d'une reconversion professionnelle j'ai validé le parcours<span className="purple"> BTS intégrateur Web</span> avec <span className="purple">OpenClassrooms</span> en 2024.
            <br />
            <br />
            En dehors du codage, voici quelques autres activités qui me passionnent :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> L'informatique
            </li>
            <li className="about-activity">
              <ImPointRight /> La Musique
            </li>
            <li className="about-activity">
              <ImPointRight /> Les Voyages
            </li>
            <li className="about-activity">
              <ImPointRight /> Le Paysagisme
            </li>
            <li className="about-activity">
              <ImPointRight /> Les Jeux-vidéos
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “Votre temps est limité, ne le gâchez pas en menant une existence qui n’est pas la vôtre. ”{" "}
          </p>
          <footer className="blockquote-footer">De Steve Jobs / Discours à Stanford en 2005</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
