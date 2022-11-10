
import React from "react";
import { useState } from "react";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Accordion from '../../components/Accordion/Accordion';
import '../About/About.css';
import Banner2 from '../../assets/banner2.png';
import { about } from "../../constants/about";


/**
 * I'm using a map function to create an accordion component for each element of the array "about".
 * @returns A React component.
 */
function About(){
    const [active, setActive] = useState("");
    return (
        <div>
        <Header/>
          <main>
            <section className="bannerContainer">
                <img src={Banner2} className="banner" alt="bannière page à propos" />
            </section>
            <section>
              {about.map((phrase,index) => (
                <Accordion
                  title={phrase.title}
                  active={active}
                  setActive={setActive}
                  text={phrase.text}
                  key={index}
                />
              ))}
            </section>
          </main>
        <Footer/>
        </div>
    )
}

export default About;