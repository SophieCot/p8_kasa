import React, { useState } from 'react'; // Importation de React et du hook useState pour gérer l'état du carrousel

const Carrousel = ({ images }) => {
  // Déclaration d'un état local "currentIndex" pour suivre l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image précédente
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      // Si l'index actuel est 0 (première image), on passe à la dernière image
      // Sinon, on décrémente l'index pour aller à l'image précédente
      (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    );
  };

  // Fonction pour passer à l'image suivante
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      // Si l'index actuel est la dernière image (images.length - 1), on revient à la première image (index 0)
      // Sinon, on incrémente l'index pour aller à l'image suivante
      (prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    );
  };

  return (
    <div 
      className="carousel-container" 
      style={{backgroundImage: `url(${images[currentIndex]})`}} 
      // On applique le style d'arrière-plan pour afficher l'image actuelle du carrousel
    > 
      {/* Si le nombre d'images est supérieur à 1, on affiche les boutons de navigation */}
      {images.length > 1 && (
        <>
          {/* Icône de flèche gauche pour revenir à l'image précédente */}
          <i className="fa-solid fa-chevron-left" onClick={() => goToPrevious()}></i>
          
          {/* Icône de flèche droite pour passer à l'image suivante */}
          <i className="fa-solid fa-chevron-right" onClick={() => goToNext()}></i>
          
          {/* Affichage du compteur d'images actuelles (ex : 1/5) */}
          <p className="counter">{currentIndex + 1}/{images.length}</p>
        </>
      )}
    </div>
  );
};

export default Carrousel;

