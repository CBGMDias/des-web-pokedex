const pokemons = [
  { id: 1, nome: 'Bulbassauro', tipo: 'Vegetal/Veneno' },
  { id: 2, nome: 'Squirtle', tipo: 'Água' },
  { id: 3, nome: 'Charmander', tipo: 'Fogo' },
  { id: 4, nome: 'Pikachu', tipo: 'Elétrico' },
  { id: 5, nome: 'Jigglypuff', tipo: 'Normal/Fada' },
  { id: 6, nome: 'Meowth', tipo: 'Normal' },
  { id: 7, nome: 'Psyduck', tipo: 'Água' },
  { id: 8, nome: 'Machop', tipo: 'Lutador' },
  { id: 9, nome: 'Geodude', tipo: 'Pedra/Terra' },
  { id: 10, nome: 'Abra', tipo: 'Psíquico' },
  { id: 11, nome: 'Gengar', tipo: 'Fantasma/Veneno' },
  { id: 12, nome: 'Onix', tipo: 'Pedra/Terra' },
  { id: 13, nome: 'Eevee', tipo: 'Normal' },
  { id: 14, nome: 'Snorlax', tipo: 'Normal' },
  { id: 15, nome: 'Dragonite', tipo: 'Dragão/Voador' },
  { id: 16, nome: 'Mewtwo', tipo: 'Psíquico' },
  { id: 17, nome: 'Chikorita', tipo: 'Vegetal' },
  { id: 18, nome: 'Cyndaquil', tipo: 'Fogo' },
  { id: 19, nome: 'Totodile', tipo: 'Água' },
  { id: 20, nome: 'Togepi', tipo: 'Fada' }
];

pokemons.sort((a, b) => a.nome.localeCompare(b.nome));

  
  const getPokemons = () => pokemons
  const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id))
  const createPokemon = (nome, tipo) => {
    const novoPokemon = { id: pokemons.length + 1, nome, tipo }
    pokemons.push(novoPokemon)
    pokemons.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  
  module.exports = { getPokemons, getPokemonById, createPokemon }
  