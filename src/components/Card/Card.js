import React from "react";
import { NavLink } from 'react-router-dom';
import '../Card/Card.css';

const Card = ({ title, id, cover }) => {
  return (
    <NavLink className="cardLink "to={`location/${id}`}>
      <article className="cardStyle">
        <img className="cardImg" src={cover} alt={title} />
        <div className="gradient"></div>
        <h2 className="cardTitle">{title}</h2>
      </article>
    </NavLink>
  );
};

export default Card;