import axios from 'axios';


const api = axios.create({
    baseURL :'http://172.16.61.61/restGSB' //api lancé par le prof
});


export default api;


