const { getPokemonById } = require("./pokemonModel");

// Vetor inicial de treinadores
const treinadores = [
    { id: 1, nome: 'Ash', pokedex: [getPokemonById(4), getPokemonById(13)] }
];

// Métodos
const updatePokedex = (pokemonId) => {
    pokedex.push(getPokemonById(pokemonId));
}

const createTreinador = (nome, pokedex) => {
    const novoTreinador = { id: treinadores.length + 1, nome, pokedex };
    treinadores.push(novoTreinador);
}

const getTreinadores = () => treinadores;
const getTreinadorById = (id) => treinadores.find(p => p.id === parseInt(id));

module.exports = { updatePokedex, createTreinador, getTreinadores, getTreinadorById };
