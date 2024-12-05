import React from 'react';
import { useParams } from "react-router-dom";
import location from "../data/kasa.json";
import Collapse from './pages/Collapse';
import Carrousel from './pages/Carrousel';

const findLocID = (id) => {
    return location.find((loc) => loc.id === id);
}

const Loc = () => {
    const { id } = useParams();
    const loc = findLocID(id);
    const pictures = loc.pictures;
    return (
        <div>
          
   {/* Affichage du Carrousel d'images */}
   <Carrousel images={pictures} />
            <Collapse title="Description">
                <p>{loc.description}</p>
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

