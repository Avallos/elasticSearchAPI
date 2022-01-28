const express = require('express')
const { populateElasticSearch } = require('./controllers/populateController')
const { deletePokemon, getPokemonByName, getPokemonById, getPokemonByRangeBaseExperience } = require('./controllers/pokemonController')

const app = express()

app.listen(3333, () => {
    console.log('Express iniciado')
})
app.use(express.json())


app.post('/populate', populateElasticSearch)

app.delete('/delete/:id', deletePokemon)

app.get('/getPokemonByName', getPokemonByName)

app.get('/getPokemonById', getPokemonById)

app.get('/getPokemonByRangeBaseExperience', getPokemonByRangeBaseExperience)