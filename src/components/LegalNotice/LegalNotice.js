import React from "react";
import "./LegalNotice.scss";
import { Link } from "react-router-dom";

function LegalNotice() {
  return (
    <section className="legal-notice-section">
      <div className="legal-notice">
        <h1>Mentions Légales</h1>
        <p>Bienvenue sur notre page de mentions légales. Voici les informations légales concernant notre site :</p>
        <ul>
          <li>Adresse : 101 Quai de la Banquière, 06730 Saint-André de la Roche, France</li>
          <li>Téléphone : +33 7 81 51 34 46</li>
          <li>Email : suppa.bastien@gmail.com</li>
        </ul>
        <p>Pour toute question ou demande d'information, n'hésitez pas à nous contacter via les coordonnées ci-dessus.</p>
        <Link to="/" className="back-to-home">Retour à l'accueil</Link>
      </div>
    </section>
  );
}

export default LegalNotice;