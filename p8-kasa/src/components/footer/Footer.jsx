import React from 'react';
import logo from "../../assets/img/kasaB.png";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="Logo Kasa" className="logo" />
      <p>© 2024 Kasa. Tous droits réservés.</p>
    </div>
  );
};
export default Footer;

