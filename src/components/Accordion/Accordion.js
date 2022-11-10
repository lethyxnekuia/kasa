import React, { useState } from "react";
import upArrow from "../../assets/vectorup.png";
import downArrow from "../../assets/vectordown.png";
import '../Accordion/Accordion.css';

function Accordion({ title, text}) {
  const [current, setCurrent] = useState(0);
  const open = () => {
    setCurrent(current === 0 ? 1 : 0);
  };
  let textArray = []
  if(Array.isArray(text) === true){
    textArray = text
  }else{
    textArray = [text]
  }
  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="accordionContainer">
          <h3>{title}</h3>
          <span
            onClick={open}
          >
            {current === 1 ? (
              <img src={upArrow} alt="uparrow" />
            ) : (
              <img src={downArrow} alt="downarrow" />
            )}
          </span>
        </div>
      </div>

      <div className={(current === 1 ? "show" : "") + " accordionContent"}>
        <ul className="accordionTextList">
        {textArray.map((element, index) =>(
          <li className="accordionText" key={element + index}>{element}</li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default Accordion;