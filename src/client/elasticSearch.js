const { Client } = require('@elastic/elasticsearch')

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

module.exports = { getElasticSearchClient };
