import React from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import '../Home/Home.css';
import Banner1 from '../../assets/banner1.png';
import { FetchDataJson } from "../../composables/FetchDataJson";

function Home() {
  const { data } = FetchDataJson("data.json");
  return (
    <React.Fragment>
    <Header/>
    <main>
      <section className="bannerContainer">
        <img src={Banner1} className="banner" alt="bannière page d'accueil"/>
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <section className="cardContainer">
          {data.map((location,index) => (
            <Card
              title={location.title}
              id={location.id}
              cover={location.cover}
              key={index}
            />
          ))}
      </section>
      </main>
    <Footer/>
    </React.Fragment>
  );
};

export default Home;
