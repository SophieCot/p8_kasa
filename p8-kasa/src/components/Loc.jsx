import React from 'react';
import { useParams } from "react-router-dom";
import location from "../data/kasa.json"; // Assure-toi que le chemin est correct
import Collapse from './pages/Collapse';
import Carrousel from './pages/Carrousel';

// Fonction pour trouver une location par son ID
const findLocID = (id) => {
    return location.find((loc) => loc.id === id);
};

const Loc = () => {
    const { id } = useParams();
    const loc = findLocID(id);

    // Vérification si la location existe
    if (!loc) {
        return (
            <div>
                <h2>Location non trouvée</h2>
                <p>La location que vous cherchez n'existe pas.</p>
            </div>
        );
    }

    const pictures = loc.pictures;
    const rating = loc.rating; // La note de la location
    const hostName = loc.host.name; // Nom de l'hôte
    const hostPicture = loc.host.picture; // Photo de l'hôte
    const locationStr = loc.location; // Localisation
    const tags = loc.tags; // Tags
    const description = loc.description; // Description
    const title = loc.title; //titre

    // Fonction pour afficher les étoiles
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={`full-${i}`}>&#9733;</span>); // Étoile pleine
        }
        if (halfStar) {
            stars.push(<span key="half">&#189;</span>); // Étoile moitié
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`}>&#9734;</span>); // Étoile vide
        }
        return stars;
    };

    return (
        <div>
              {/* Affichage du titre */}
              <h1>{title}</h1>

            {/* Affichage du Carrousel d'images */}
            <Carrousel images={pictures} />

            {/* Affichage de la location */}
            <div className="location" style={{ marginTop: '20px', fontSize: '16px', color: '#555' }}>
                <p><strong>Location : </strong>{locationStr}</p>
            </div>

            {/* Affichage du nom et de la photo de l'hôte */}
            <div className="host" style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                <img src={hostPicture} alt="Host" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                <p><strong>Hôte: </strong>{hostName}</p>
            </div>

            {/* Affichage de la note (étoiles) */}
            <div className="rating" style={{ marginTop: '20px' }}>
                <p>Note: {renderStars(rating)}</p>
            </div>

            {/* Affichage des tags */}
            <div className="tags" style={{ marginTop: '20px' }}>
                {tags.map((tag, index) => (
                    <span key={index} style={{ marginRight: '10px', background: 'rgb(255, 96, 96)', color:'white', padding: '5px', borderRadius: '20px' }}>
                        {tag}
                    </span>
                ))}
            </div>

            {/* Collapse pour la description */}
            <Collapse title="Description">
                <p>{description}</p>
            </Collapse>

            {/* Collapse pour les équipements */}
            <Collapse title="Équipements">
                <ul>
                    {loc.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </Collapse>
        </div>
    );
};

export default Loc;
