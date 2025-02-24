import React, { useState } from "react"; // Import de React et du hook useState pour gérer l'état local du composant
import "./collapse.scss";

// Définition du composant Collapse qui prend en props un titre et un texte (qui peut être un tableau ou une chaîne de texte)
const Collapse = ({ title, text }) => {
  // useState pour gérer l'état "isOpen" qui détermine si le contenu de la section est visible ou non
  const [isOpen, setIsOpen] = useState(false);

  // Fonction toggleCollapse qui inverse l'état de "isOpen" à chaque clic
  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Inverse la valeur de "isOpen" (si ouvert, ferme, sinon ouvre)
  };

  return (
    <div className="collapse-container">
      {/* Conteneur global de la section de collapse */}
      <div className="collapse">
        {/* Entête du collapse qui est cliquable pour ouvrir/fermer */}
        <div onClick={toggleCollapse} className="collapse-header">
          {/* Affichage du titre du collapse */}
          {title}
          
          {/* Icône directionnelle indiquant si le collapse est ouvert ou fermé */}
          <span>
            {isOpen ? (
              // Si isOpen est true (ouvert), affiche la flèche pointant vers le haut
              <i className="fa-solid fa-chevron-up"></i>
            ) : (
              // Si isOpen est false (fermé), affiche la flèche pointant vers le bas
              <i className="fa-solid fa-chevron-down"></i>
            )}
          </span>
        </div>

        {/* Contenu du collapse qui sera visible si isOpen est true */}
        <div className={`collapse-content ${isOpen ? "collapse-open" : ""}`}>
          {isOpen && (
            <div>
              {/* Vérification si le texte est un tableau (pour afficher une liste d'équipements) */}
              {Array.isArray(text) ? (
                <ul className="equipmentsList">
                  {/* Si c'est un tableau, on affiche une liste des équipements */}
                  {text.map((txt, i) => (
                    <li key={i}>{txt}</li> // Chaque élément du tableau est affiché sous forme de <li>
                  ))}
                </ul>
              ) : (
                // Si ce n'est pas un tableau, on l'affiche sous forme de paragraphe
                <p>{text}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collapse;

