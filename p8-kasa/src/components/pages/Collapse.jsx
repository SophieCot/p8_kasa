
import imgbannerabout from '../../assets/img/imgbanner-about.png';
import Thumb from '../Thumb';
import location from "../../data/kasa.json";

import React, { useState } from "react";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginBottom: "10px", border: "1px solid #ddd", borderRadius: "5px", padding: "10px", backgroundColor :"#FF6060", color :"white" }}>
      <div 
        onClick={toggleCollapse} 
        style={{ cursor: "pointer", fontWeight: "bold", display: "flex", justifyContent: "space-between" }}
      >
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      <div
        style={{
          maxHeight: isOpen ? "1000px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        {isOpen && <div style={{ marginTop: "10px", backgroundColor: "white" , color:"black", }}>{children}</div>}
      </div>
    </div>
  );
};

export default Collapse;
