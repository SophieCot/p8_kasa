import React from "react";
import { Link } from "react-router-dom";
import "../../sass/ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="back-home">
        Retourner à l'accueil
      </Link>
    </div>
  );
};

export default ErrorPage;
