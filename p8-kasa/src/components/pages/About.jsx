import React from 'react';
import imgbannerabout from '../../assets/img/imgbanner-about.png';
import Thumb from '../Thumb';
import location from "../../data/kasa.json";
import Collapse from './Collapse';

const About = () => {
    return (
        <div className="home">
            <div className="banner">
                <img src={imgbannerabout} alt="image d'un paysage pour la bannière" />
            </div>
              {/* Section Collapse */}
              <div className="collapse-section">

                {/* Collapse 1 */}
                <Collapse title="Fiabilté">
                    <p>
                        Notre entreprise a été fondée en 2020 avec l'objectif de créer un
                        service de location d'espaces de qualité pour les voyageurs à la
                        recherche d'un hébergement unique et confortable.
                    </p>
                </Collapse>

                {/* Collapse 2 */}
                <Collapse title="Respect">
                    <p>
                        Nous mettons un point d'honneur à offrir une expérience client
                        exceptionnelle, en mettant l'accent sur l'intégrité, l'innovation et
                        le respect de l'environnement.
                    </p>
                </Collapse>

                {/* Collapse 3 */}
                <Collapse title="Service">
                    <p>
                        Notre équipe est composée de professionnels passionnés et
                        expérimentés dans le domaine de l'hébergement et de l'accueil. Nous
                        travaillons sans relâche pour offrir à nos clients une expérience
                        inoubliable.
                    </p>
                </Collapse>

                    {/* Collapse 4 */}
                    <Collapse title="Securité">
                    <p>
                        Notre équipe est composée de professionnels passionnés et
                        expérimentés dans le domaine de l'hébergement et de l'accueil. Nous
                        travaillons sans relâche pour offrir à nos clients une expérience
                        inoubliable.
                    </p>
                </Collapse>
                </div>
        </div>
    );
};

export default About;