import { useOutletContext } from "react-router-dom";
function Medecins(){


    const {visiteur, setVisiteur} = useOutletContext();
    return (
        <>
            <h1>Médecins pages !</h1>
        </>
    )
}

export default Medecins;