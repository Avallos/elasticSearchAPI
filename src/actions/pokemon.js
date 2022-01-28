const { apiRequest } = require('../client/apiRequest');


//Função utilizada para recuperar dados sobre os pokemons da API
async function getPokemons(){
    const listPokemonsDetails = []
    const response = await apiRequest('get', 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=100')
    const listPokemons = response.data.results
    for (pokemon of listPokemons){
        const { url } = pokemon
        const pokemonDetails = await apiRequest('get', url)
        const { data } = pokemonDetails
        const { id, name, base_experience, height,weight } = data
        listPokemonsDetails.push({
            id,
            name,
            base_experience,
            height,
            weight
        })

    }

    return listPokemonsDetails
}

module.exports = {getPokemons}