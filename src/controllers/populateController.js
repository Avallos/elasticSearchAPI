const { getElasticSearchClient } = require('../client/elasticSearch')
const { getPokemons } = require('../actions/pokemon')

const elasticClient = getElasticSearchClient();

async function populateElasticSearch(req, res){
    try{
        const pokemons = await getPokemons();
        
        for (pokemon of pokemons){
            await elasticClient.index({
                index: 'elastic_pokemon',
                type: 'type_elastic_pokemon',
                body: pokemon
            })
        }
        return res.send('Elastic Populado')
    }catch(err){
        console.log(err)
    }
}

module.exports = { populateElasticSearch }
