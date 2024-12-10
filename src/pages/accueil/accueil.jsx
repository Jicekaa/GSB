import { Outlet } from "react-router-dom";
import Navbar from "../../composants/navbar";
import { useState } from "react";

function Accueil(){
    


    return (
        <>
            <Navbar/>
            <Outlet />
            
                
            <div><h1>Bienvenue</h1></div>
            
        </>
    );
}

export default Accueil;