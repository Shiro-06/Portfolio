import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import NinaCarducci from "../../Assets/Projects/Nina Carducci.png";
import Events from "../../Assets/Projects/724 Events.png";
import Kasa from "../../Assets/Projects/Kasa.png";
import Booki from "../../Assets/Projects/Booki.png";
import SophieBluel from "../../Assets/Projects/Sophie Bluel.png";
import OhMyFood from "../../Assets/Projects/Ohmyfood.png";
import ArgentBank from "../../Assets/Projects/Argent Bank 1.png";
import "./Projects";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple"> Projets</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Booki}
              title="Booki"
              description="J'ai intégré l'interface du site web pour une start-up qui aide les utilisateurs à trouver des hébergements et des activités. J'ai travaillé avec la CTO et le designer UI. On m'a fourni une maquette du site, une note de synthèse des spécifications, et une structure de fichiers de base avec du code HTML et CSS. J'ai complété ce code et conservé la structure de dossiers."
              ghLink="https://github.com/Shiro-06/p3"
              demoLink="https://shiro-06.github.io/p3/"
              carouselImages={[
                require("../../Assets/Projects/Booki 1.png"),
              ]}
              techStack={["html5", "css3"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OhMyFood}
              title="Ohmyfood"
              description="J'ai intégré une start-up de la restauration souhaitant s'imposer à Paris. Ma mission était de développer un site mobile first pour répertorier les menus de restaurants gastronomiques. L'équipe commerciale avait déjà convaincu quatre restaurateurs d'utiliser la plateforme. J'ai travaillé sur le projet en suivant les maquettes fournies et en m'assurant que le site soit responsive et utilise SASS pour le CSS. J'ai également realisé les animations CSS et expliqué leur fonctionnement."
              ghLink="https://github.com/Shiro-06/P4"
              demoLink="https://shiro-06.github.io/P4/"
              carouselImages={[
                require("../../Assets/Projects/OMF 1.png"),
                require("../../Assets/Projects/OMF 2.png"),
                require("../../Assets/Projects/OMF 3.png"),
                require("../../Assets/Projects/OMF 4.png")
              ]}
              techStack={["html5", "css3", "sass"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kasa}
              title="Kasa"
              description="J'ai travaillé comme développeur front-end pour une agence. On m'a confié la mission de participer à la réalisation d'un portfolio pour une photographe. Ayant reçu par mail toutes les informations nécessaires : le design Figma, le code back-end, le code front-end d’origine et le Kanban pour la mission, j'ai pu terminé ce projet avec succès."
              ghLink="https://github.com/Shiro-06/projet8"
              demoLink="https://shiro-06.github.io/projet8/#/Home"
              carouselImages={[
                require("../../Assets/Projects/Kasa 1.png"),
                require("../../Assets/Projects/Kasa 2.png"),
                require("../../Assets/Projects/Kasa 3.png")
              ]}
              techStack={["react", "javascript", "css3"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NinaCarducci}
              title="Nina Carducci"
              description="Je suis développeur freelance et j'ai décidé de proposer mes services d’optimisation SEO à de nouveaux clients. Parmi mes prospects, il y avait le site d'une photographe dont m'avait parlé un ami. J'ai envoyé un e-mail pour proposer mes services, soulignant que son site était long à charger et qu'il bénéficierait d'une optimisation pour les moteurs de recherche. J'ai joint un document d’audit des problèmes rencontrés par son site et offert mes services pour corriger ces éléments, en détaillant les améliorations possibles et les avantages d'un meilleur référencement."
              ghLink="https://github.com/Shiro-06/p9"
              demoLink="https://shiro-06.github.io/p9/"
              carouselImages={[
                require("../../Assets/Projects/Nina Carducci 1.PNG"),
                require("../../Assets/Projects/Nina Carducci 2.PNG"),
                require("../../Assets/Projects/Nina Carducci 3.PNG")
              ]}
              techStack={["html5", "css3", "javascript", "seo"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SophieBluel}
              title="Sophie Bluel"
              description="J'ai travaillé en tant que développeur front-end pour une agence. Après un brief d'équipe, mes principales missions étaient de développer la page de présentation des travaux, la page de connexion de l'administrateur, et la modale pour uploader de nouveaux médias. Pour cela, j'ai utilisé JavaScript et des interactions avec le back-end pour gérer dynamiquement le rendu des photos."
              ghLink="https://github.com/Shiro-06/projet6"
              demoLink=""
              carouselImages={[
                require("../../Assets/Projects/Sophie Bluel 1.png"),
                require("../../Assets/Projects/Sophie Bluel 2.png"),
                require("../../Assets/Projects/Sophie Bluel 3.png")
              ]}
              techStack={["html5", "css3", "javascript", "backend"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Events}
              title="724 Events"
              description="En tant que développeur front-end freelance, j'ai finalisé la nouvelle version du site vitrine d'une agence événementielle, corrigeant les bugs et élaborant un cahier des recettes après le départ du précédent développeur. J'ai utilisé HTML, CSS, JavaScript, ainsi que des outils comme React, Node.js et React Developer Tools."
              ghLink="https://github.com/Shiro-06/p10"
              demoLink=""
              carouselImages={[
                require("../../Assets/Projects/724 Events 1.PNG"),
                require("../../Assets/Projects/724 Events 2.PNG"),
                require("../../Assets/Projects/724 Events 3.PNG")
              ]}
              techStack={["html5", "css3", "javascript", "react", "nodejs"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ArgentBank}
              title="Argent Bank"
              description="Pour la phase 1 : J'ai utilisé React, SASS et Redux pour développer une application web complète et responsive, avec des pratiques de Green Code pour optimiser les images et le code. L'application permet aux utilisateurs de se connecter, de voir leur profil, et de se déconnecter, tout en gérant les erreurs de connexion. 
              Pour la phase 2 : J'ai conçu une fonctionnalité pour les transactions permettant aux utilisateurs de visualiser leurs transactions, voir les détails, et modifier les informations. J'ai proposé des routes API en suivant les directives de Swagger, spécifiant les méthodes HTTP, les routes, les descriptions, les paramètres et les réponses possibles."
              ghLink="https://github.com/Shiro-06/ArgentBank-website/tree/master"
              demoLink=""
              carouselImages={[
                require("../../Assets/Projects/Argent Bank 1.png"),
                require("../../Assets/Projects/Argent Bank 2.png"),
                require("../../Assets/Projects/Argent Bank 3.png"),
                require("../../Assets/Projects/Argent Bank 4.png")
              ]}
              techStack={["react", "sass", "redux", "swagger"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;