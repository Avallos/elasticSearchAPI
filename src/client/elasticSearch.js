const { Client } = require('@elastic/elasticsearch')
const elasticSearch = require('elasticsearch')

// Função que retorna client Elastic com conexão Cloud
function getElasticSearchClient() {

    return new Client({
        cloud: {
            id: 'YourCloudID'
        },
        auth: {
            username: 'elastic',
            password: 'YourPassword'
        }
    });
    
}

// Função que retorna client Elastic com conexão Local (Docker ou instalação em Máquina)
function getElasticSearchClientNoCloud() {
    return new elasticSearch.Client({
        host: 'YourLocalHost',
        log: 'trace'
    })
}

module.exports = { getElasticSearchClient, getElasticSearchClientNoCloud };
