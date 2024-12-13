import { useOutletContext } from "react-router-dom";

function Rapports(){
    
    const {visiteur, setVisiteur} = useOutletContext();
    return(
        <>
            <h1>AU RAPPORT</h1>
        
        </>
    )
}

export default Rapports;