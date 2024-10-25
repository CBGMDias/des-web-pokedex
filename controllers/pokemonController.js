const pokemonModel = require('../models/pokemonModel')

const getIndex = (req, res) => {
    res.render('index')
}

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons()
    res.render('pokedex', { pokemons })
};

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id)
    if (pokemon) {
        res.render('pokemon', { pokemon })
    } else {
        res.status(404).send('Pokémon não encontrado')
    }
};

const addPokemon = (req, res) => {
    const { nome, tipo } = req.body
    pokemonModel.createPokemon(nome, tipo)
    res.redirect('/')
};

module.exports={ getIndex, getAllPokemons, getPokemon, addPokemon }