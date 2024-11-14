import axios from 'axios';


const api = axios.create({
    baseURL :'http://172.16.61.61/restGSB' //api lancé par le prof
});


export default api;

async function getUser(leLogin, leMdp) {
    try {
        const response = await api.get('/connexion', {
            params:{
                login : leLogin,
                mdp : leMdp
            },
        });
        return response;
    }
    catch (error) {
        console.log("Erreur connexion API")
    }
}
