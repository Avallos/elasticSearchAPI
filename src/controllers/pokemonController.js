const { getElasticSearchClient } = require('../client/elasticSearch')

const elasticClient = getElasticSearchClient()
const index = 'elastic_pokemon'
const type = 'type_elastic_pokemon'


async function deletePokemon(req, res){

    const { id } = req.body
    const result = await elasticClient.delete(
        {
            index,
            type,
            id 
        }
    )
    res.send(result)
    
}

async function getPokemonByName(req, res){

    const { name } = req.body
    const result = await elasticClient.search({
        body: {
            query: {
                match: { "name": name }
            }
        }
    })
    res.send(result.body)
}

async function getPokemonById(req, res){

    try{
        const { id } = req.body
        const result = await elasticClient.search({
            body: {
                query: {
                    match: { "id": id }
                }
            }
        })
        res.send(result.body)
    }catch(err){
        res.send(err)
        console.log(err)
    }
    
}


module.exports = { deletePokemon, getPokemonByName, getPokemonById }