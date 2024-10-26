const treinadorModel = require('../models/treinadorModel')
const pokemonModel = require('../models/pokemonModel')

const getAllTreinadores = (req, res) => {
    const treinadores = treinadorModel.getTreinadores()
    res.render('treinadores', { treinadores })
};

const addTreinador = (req, res) => {
    const { nome, pokemons } = req.body

    const pokedexTreinador = []

    pokemons.forEach((pokemonId) => {
        const pokemon = pokemonModel.getPokemonById(parseInt(pokemonId))
        if (pokemon) {
            pokedexTreinador.push(pokemon)
        }
    })

    treinadorModel.createTreinador(nome, pokedexTreinador)
    res.redirect('/treinadores')
};

const getAddTreinador = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('add-treinador', { pokemons })
}

const getTreinador = (req, res) => {
    const treinador = treinadorModel.getTreinadorById(req.params.id)
    if (treinador) {
        res.render('treinador', { treinador })
    } else {
        res.status(404).send('Treinador não encontrado')
    }
};

module.exports = { getAllTreinadores, addTreinador, getAddTreinador, getTreinador }