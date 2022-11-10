import { NavLink } from 'react-router-dom';
import React from "react";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../Error/Error.css';

function Error(){
    return (
        <div>
            <Header/>
            <p className="error404">404</p>
            <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">
                <p className="errorLink">Retourner sur la page d’accueil</p>
            </NavLink>
            <Footer/>
        </div>
    )
}

export default Error