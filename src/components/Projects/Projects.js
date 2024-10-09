import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import Booki from "../../Assets/Projects/Booki.png";
import suicide from "../../Assets/Projects/suicide.png";
import OhMyFood from "../../Assets/Projects/Ohmyfood.png";
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
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OhMyFood}
              title="Ohmyfood"
              description="J'ai intégré une start-up de la restauration souhaitant s'imposer à Paris. Ma mission était de développer un site mobile first pour répertorier les menus de restaurants gastronomiques. L'équipe commerciale avait déjà convaincu quatre restaurateurs d'utiliser la plateforme. J'ai travaillé sur le projet en suivant les maquettes fournies et en m'assurant que le site soit responsive et utilise SASS pour le CSS. J'ai également realisé les animations CSS et expliqué leur fonctionnement."
              ghLink="https://github.com/Shiro-06/P4"
              demoLink="https://shiro-06.github.io/P4/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Kasa"
              description="J'ai travaillé comme développeur front-end pour une agence. On m'a confié la mission de participer à la réalisation d'un portfolio pour une photographe. Ayant reçu par mail toutes les informations nécessaires : le design Figma, le code back-end, le code front-end d’origine et le Kanban pour la mission, j'ai pu terminé ce projet avec succès."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="Nina Carducci"
              description="Utilisation du dataset de maladies des plantes de Kaggle et entraînement d'un modèle de classification d'images en utilisant le framework 'PyTorch' avec CNN et l'apprentissage par transfert avec 38 classes de diverses feuilles de plantes. Le modèle a réussi à détecter les feuilles malades et saines de 14 plantes uniques. J'ai pu atteindre une précision de 98% en utilisant le modèle pré-entraîné Resnet34."
              ghLink="https://github.com/Shiro-06/p9"
              demoLink="https://shiro-06.github.io/p9/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              title="Sophie Bluel"
              description="Utilisation du 'Traitement Automatique du Langage Naturel' pour la détection des posts liés au suicide et de l'idéation suicidaire des utilisateurs dans le cyberespace, contribuant ainsi à la prévention du suicide."
              ghLink="https://github.com/Shiro-06/projet6"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="724 Events"
              description="Entraînement d'un classificateur CNN en utilisant le 'dataset FER-2013' avec Keras et le backend tensorflow. Le classificateur a réussi à prédire les différents types d'émotions humaines. La précision la plus élevée obtenue avec le modèle était de 60,1%. Ensuite, utilisation d'Open-CV pour détecter le visage dans une image et passer le visage au classificateur pour prédire l'émotion d'une personne."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Argent Bank"
              description="Entraînement d'un classificateur CNN en utilisant le 'dataset FER-2013' avec Keras et le backend tensorflow. Le classificateur a réussi à prédire les différents types d'émotions humaines. La précision la plus élevée obtenue avec le modèle était de 60,1%. Ensuite, utilisation d'Open-CV pour détecter le visage dans une image et passer le visage au classificateur pour prédire l'émotion d'une personne."
              ghLink="https://github.com/Shiro-06/ArgentBank-website/tree/master"
              demoLink=" "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
