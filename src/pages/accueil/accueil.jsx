import { Outlet } from "react-router-dom";
import Navbar from "../../composants/navbar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { createContext } from "react";

function Accueil(){
    const VisiteurContext = createContext();
    const [visiteur, setVisiteur] = useState({}); //initialise avec objet vide
    const { state } = useLocation(); //récupérer les valeurs qui ont été redirigées par l'api
    const {nom, prenom, adresse} = state; //récup nom & prenom dans la var state
    
    useEffect(() => {
        console.log(state);
    }, []);


    return (
        <>
            <Navbar/>
            <div><h1>Bienvenue, {nom} {prenom}, {adresse}</h1></div>
            <Outlet context={{visiteur, setVisiteur}} /> 
        </>
    );
}

export default Accueil;