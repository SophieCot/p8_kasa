
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
    <div style={{ marginBlock: "30px", border: "1px solid #ddd", borderRadius: "5px", backgroundColor :"#FF6060", color :"white" }}>
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
        {isOpen && <div style={{ marginTop: "10px", backgroundColor: "#f5f5f5" , color:"black", }}>{children}</div>}
      </div>
    </div>
  );
};

export default Collapse;
