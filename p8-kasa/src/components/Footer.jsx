import React from 'react';
import logo from "../assets/img/kasaB.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: 'black', // Fond noir
        color: 'white', // Texte en blanc
        textAlign: 'center', // Centrer le texte et le logo
        padding: '20px 0', // Espacement en haut et en bas du footer
      }}
    >
      <img
        src={logo}
        alt="Logo Kasa"
        style={{
          display: 'block', // Bloquer l'image pour qu'elle soit un élément de type bloc
          margin: '0 auto', // Centrer l'image horizontalement
          width: '120px', // Vous pouvez ajuster la taille du logo
        }}
      />   
        <p
        style={{
          marginTop: '10px', // Un peu d'espacement entre l'image et le texte
          fontSize: '14px', // Taille du texte
          fontStyle: 'italic', // Style italique (facultatif)
        }}
      >
        © 2024 Kasa. Tous droits réservés.
      </p>    
    </div>
  );
};

export default Footer;

