import React from 'react';
import imgbanner from '../../assets/img/img-banner.png';
import Thumb from '../Thumb';
import location from "../../data/kasa.json";
import Banner from '../Banner';


const Home = () => {
    return (
        <div className="home">
            <Banner image={imgbanner} title="Chez vous, partout et ailleurs" alt="image d'un paysage pour la bannière"/>
            <div className='gallery'>
                <Thumb location={location} />
            </div>
        </div>
    );
};

export default Home;