//code du TP

async function getVisiteur(leLogin, leMdp){
    
    try {
        const response = await api.get('/connexion', {
            params: {
                login : leLogin,
                mdp : leMdp
            },
        });
        return response;
    }
    catch (error) {
        console.log("ERREUR connexion API")
    }
}


export default getVisiteur;