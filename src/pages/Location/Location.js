import React from "react";
import { useParams } from "react-router-dom";
import Caroussel from '../../components/Caroussel/Caroussel';
import Description from '../../components/Description/Description';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import data from "../../constants/data.json";
import Error from '../../pages/Error/Error';
import '../Location/Location.css';

function Location(){
    const urlParams  = useParams();
    const activeLocation = data.filter(location => location.id === urlParams.id);
    const currentLocation = activeLocation[0]
    if (activeLocation.length === 0){
        return (
              <Error />
          );
    }else{
    return (
        <div>
            <Header/>
            <main className="location">
                {activeLocation.map((pictures, index) => {
                    return <Caroussel location={activeLocation} key={index}/>;
                }
        )}  
            <Description
                location={currentLocation}
                />
            </main>
            <Footer/>
        </div>
        
    )}
}

export default Location