import React from 'react';
import imgbanner from '../../assets/img/img-banner.png';
import location from "../../data/kasa.json";
import "./home.scss"
import Banner from '../../components/banner/Banner';
import Thumb from '../../components/thumb/Thumb';


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