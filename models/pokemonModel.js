const pokemons = [
  { id: 1, nome: 'Bulbassauro', tipo: 'Vegetal/Veneno', peso: 6.9, altura: 0.7, nivelPoder: 45 },
  { id: 2, nome: 'Squirtle', tipo: 'Água', peso: 9.0, altura: 0.5, nivelPoder: 44 },
  { id: 3, nome: 'Charmander', tipo: 'Fogo', peso: 8.5, altura: 0.6, nivelPoder: 39 },
  { id: 4, nome: 'Pikachu', tipo: 'Elétrico', peso: 6.0, altura: 0.4, nivelPoder: 35 },
  { id: 5, nome: 'Jigglypuff', tipo: 'Normal/Fada', peso: 5.5, altura: 0.5, nivelPoder: 115 },
  { id: 6, nome: 'Meowth', tipo: 'Normal', peso: 4.2, altura: 0.4, nivelPoder: 40 },
  { id: 7, nome: 'Psyduck', tipo: 'Água', peso: 19.6, altura: 0.8, nivelPoder: 50 },
  { id: 8, nome: 'Machop', tipo: 'Lutador', peso: 19.5, altura: 0.8, nivelPoder: 70 },
  { id: 9, nome: 'Geodude', tipo: 'Pedra/Terra', peso: 20.0, altura: 0.4, nivelPoder: 40 },
  { id: 10, nome: 'Abra', tipo: 'Psíquico', peso: 19.5, altura: 0.9, nivelPoder: 25 },
  { id: 11, nome: 'Gengar', tipo: 'Fantasma/Veneno', peso: 40.5, altura: 1.5, nivelPoder: 60 },
  { id: 12, nome: 'Onix', tipo: 'Pedra/Terra', peso: 210.0, altura: 8.8, nivelPoder: 35 },
  { id: 13, nome: 'Eevee', tipo: 'Normal', peso: 6.5, altura: 0.3, nivelPoder: 55 },
  { id: 14, nome: 'Snorlax', tipo: 'Normal', peso: 460.0, altura: 2.1, nivelPoder: 160 },
  { id: 15, nome: 'Dragonite', tipo: 'Dragão/Voador', peso: 210.0, altura: 2.2, nivelPoder: 91 },
  { id: 16, nome: 'Mewtwo', tipo: 'Psíquico', peso: 122.0, altura: 2.0, nivelPoder: 106 },
  { id: 17, nome: 'Chikorita', tipo: 'Vegetal', peso: 6.4, altura: 0.9, nivelPoder: 45 },
  { id: 18, nome: 'Cyndaquil', tipo: 'Fogo', peso: 7.9, altura: 0.5, nivelPoder: 39 },
  { id: 19, nome: 'Totodile', tipo: 'Água', peso: 9.5, altura: 0.6, nivelPoder: 50 },
  { id: 20, nome: 'Togepi', tipo: 'Fada', peso: 1.5, altura: 0.3, nivelPoder: 35 }
];

pokemons.sort((a, b) => a.nome.localeCompare(b.nome));

  
  const getPokemons = () => pokemons
  const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id))
  const createPokemon = (nome, tipo, peso, altura, nivelPoder) => {
    const novoPokemon = { id: pokemons.length + 1, nome, tipo, peso, altura, nivelPoder }
    pokemons.push(novoPokemon)
    pokemons.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  
  module.exports = { getPokemons, getPokemonById, createPokemon }
  