import { useOutletContext } from "react-router-dom";
import { VisiteurContext } from "./accueil.jsx";

function Rapports(){
    
    const {visiteur, setVisiteur} = useOutletContext(VisiteurContext);
    return(
        <>
            <h1>AU RAPPORT {}</h1>
        
        </>
    )
}

export default Rapports;