import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Erreur 404</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
};

export default ErrorPage;