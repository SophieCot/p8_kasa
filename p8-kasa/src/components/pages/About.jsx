import React from "react";
import imgbannerabout from "../../assets/img/imgbanner-about.png";
import Thumb from "../Thumb";
import location from "../../data/kasa.json";
import Collapse from "./Collapse";
import Banner from "../Banner";
import { aboutList } from "../AboutList";

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
