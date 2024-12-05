import React from 'react';
import imgbanner from '../../assets/img/img-banner.png';
import Thumb from '../Thumb';
import location from "../../data/kasa.json";


const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <img src={imgbanner} alt="image d'un paysage pour la bannière" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className='gallery'>
                <Thumb location={location} />
            </div>
        </div>
    );
};

export default Home;