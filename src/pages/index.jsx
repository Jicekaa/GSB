import { useState } from "react";
import ErreurLogin from "../composants/erreurlogin";
import getVisiteur from "../api/connexion";


function Index(){
    const [erreurlogin, setErreurLogin] = useState(false);
    function handleSubmit(event) {
        //event.preventDefault() /*évite de charger la page*/
        getVisiteur(form.get("login"), form.get("password")) /**/
        .then((response)=> {
            if (response.data != null) {
                console.log("Connexion réussie : ", response.data);
            } else {
                setErreurLogin(true); //si erreur de saisie
                                     //affiche bannière erreurlogin
            }
        })
        .catch((error) => { 
            console.error("Erreur connexion : ", error);
        });
    }

    
    

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen">
                <img src="src/image-GSB-1.png" className="w-1/6 mb-4"/>
                <h1 className="text-3xl font-bold mb-4">Identifiez-vous</h1>
                <div className="flex flex-col mb-4">
                    <label className="text-gray-500 font-bold mb-2">Login :</label>
                    <input type="text" className="border rounded px-4 py-2"/>
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-gray-500 font-bold mb-2">Password :</label>
                    <input type="password" className="border rounded px-4 py-2"/>
                </div>
                <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-bold py-2 px-4 rounded">Connexion</button>
                
                {/*Bannière d'erreur de login*/}
                <div>
                    {ErreurLogin && <ErreurLogin />}
                </div>
            
            </form>
        </>
    )

    
}



export default Index;