import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import location from "../../data/kasa.json"; // Importation des données locales depuis le fichier JSON
import Collapse from "../../components/collapse/Collapse"; // Composant Collapse pour afficher des sections repliables
import Carrousel from "../../components/carousel/Carrousel"; // Composant Carrousel pour afficher les images en diaporama
import "./location.scss"

const Location = () => {
  // Récupération de l'ID de la location à partir de l'URL via useParams
  const { id } = useParams();
  
  // hook useNavigate pour la redirection
  const navigate = useNavigate();

  // État pour stocker la location récupérée et pour gérer le loading
  const [loc, setLoc] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effet secondaire pour récupérer la location lorsque le composant est monté
  useEffect(() => {
    // Recherche de la location dans les données locales (kasa.json) en fonction de l'ID
    const locTemp = location.find((loc) => loc.id === id);

    // Vérification si la location existe, sinon redirection vers une page d'erreur
    if (!locTemp) {
      navigate("/error-404"); // Si la location n'est pas trouvée, on redirige vers la page d'erreur
    } else {
      setLoc(locTemp); // Si la location est trouvée, on la stocke dans l'état
      setLoading(false); // Mise à jour de l'état "loading" pour indiquer que les données sont prêtes
    }
  }, [id, navigate]); // L'effet se déclenche à chaque fois que "id" ou "navigate" change

  // Fonction pour générer des étoiles en fonction de la note (rating)
  const renderStars = (rating) => {
    // Calcul des étoiles pleines, vides et mi-pleines
    const fullStars = Math.floor(rating); // Étoiles pleines
    const halfStar = rating % 1 !== 0; // Vérification de l'étoile mi-pleine
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Étoiles vides

    const stars = [];
    
    // Ajout des étoiles pleines à l'array
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i className="fa-solid fa-star full-star" key={"full-" + i}></i>
      );
    }

    // Ajout des étoiles vides à l'array
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i className="fa-solid fa-star empty-star" key={"empty-" + i}></i>
      );
    }
    
    return stars; // Retour des étoiles générées
  };

  // Rendu du composant
  return loading ? ( // Si les données sont en cours de chargement, on affiche "loading..."
    <div>loading...</div>
  ) : (
    <div>
      {/* Affichage du Carrousel d'images */}
      <Carrousel images={loc.pictures} />  {/* On passe les images de la location au carrousel */}

      <div className="logementInfo">
        <div>
          {/* Affichage du titre de la location */}
          <h1>{loc.title}</h1>
          
          {/* Affichage de la localisation */}
          <div className="location">
            <p>{loc.location}</p>
          </div>

          {/* Affichage des tags */}
          <div className="tags">
            {loc.tags.map((tag, index) => (  // On boucle sur les tags pour les afficher
              <span className="tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          {/* Affichage du nom et de la photo de l'hôte */}
          <div className="host">
            <div className="hostName">
              <span>{loc.host.name.split(" ")[0]}</span>
              <span>{loc.host.name.split(" ")[1]}</span>
            </div>
            {/* Affichage de la photo de l'hôte */}
            <img className="hostImg" src={loc.host.picture} alt="Host" />
          </div>

          {/* Affichage de la note (étoiles) */}
          <div>
            <p className="rating">{renderStars(loc.rating)}</p>
          </div>
        </div>
      </div>

      <div className="loc-collapse">
        <div className="loc-collapse-size">
          {/* Collapse pour la description de la location */}
          <Collapse title="Description" text={loc.description} />
        </div>
        <div className="loc-collapse-size">
          {/* Collapse pour afficher les équipements */}
          <Collapse title="Équipements" text={loc.equipments} />
        </div>
      </div>
    </div>
  );
};

export default Location;

