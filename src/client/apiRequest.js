const axios = require('axios');

//Função genérica para fazer requisições
async function apiRequest(method, url, params = {}){
    return axios[method](url, params).then((response) => {
        return response;
    } );
}

module.exports = { apiRequest };