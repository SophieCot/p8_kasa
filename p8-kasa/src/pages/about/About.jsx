import React from "react";
import imgbannerabout from "../../assets/img/imgbanner-about.png";
import { aboutList } from "./AboutList";
import "./about.scss"
import Banner from "../../components/banner/Banner";
import Collapse from "../../components/collapse/Collapse";

const About = () => {
  return (
    <div className="home">
      <Banner
        image={imgbannerabout}
        title=""
        alt="image d'un paysage pour la bannière"
      />
      {/* Section Collapse */}
      <div className="collapse-section">
        {aboutList.map((about) => (
          <Collapse title={about.title} text={about.content} key={about.id} />
        ))}
      </div>
    </div>
  );
};

export default About;
