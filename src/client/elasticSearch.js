const { Client } = require('@elastic/elasticsearch')

function getElasticSearchClient() {

    return new Client({
        cloud: {
            id: 'Equinix:c291dGhhbWVyaWNhLWVhc3QxLmdjcC5lbGFzdGljLWNsb3VkLmNvbSRkZjg5NzZhYjhkZmE0YjVjOWVjYmQ2NzNmOTFkZWRkNSQwNWViNzE0NDA1YjY0ZWNkODgwNWExNGE5NmZhYTkwMQ=='
        },
        auth: {
            username: 'elastic',
            password: 'GJ4MwTNJevxVtaef6sDVqIEE'
        }
    });
    
}

module.exports = { getElasticSearchClient };
