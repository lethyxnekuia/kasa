import React from "react";
import Tag from "../Tag/Tag.js";
import Rate from "../Rate/Rate.js";
import Accordion from "../Accordion/Accordion.js";
import '../Description/Description.css';


const Description = (loc) => {
    const location = loc.location
  return (
    <section className="locationInfo">
        <article className="infoContainer">
            <div>
                <h2 className="locationTitle">{location.title}</h2>
                <p className="locationLocation">{location.location}</p>

                    <Tag tag={location.tags} />
            </div>
            <div>
                <div className="rateContainer">
                    <div className="rate">
                        <Rate rating={location.rating} />
                    </div>
                </div>
                <div className="hostContainer">
                    <div className="hostName">{location.host.name}</div>
                    <img src={location.host.picture} alt={location.host.name} className="hostPicture" />
                </div>
            </div>
        </article>
        <article className="accordionContainer">
            <Accordion
                    title={"Description"}
                    text={location.description}
                    className="containerDescription"
                    />
            <Accordion
                    title={"Equipements"}
                    text={location.equipments}
                    />
        </article>
    </section>
  );
};

export default Description;