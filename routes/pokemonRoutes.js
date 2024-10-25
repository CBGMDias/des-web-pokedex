const express = require('express')
const router = express.Router()
const pokemonController = require('../controllers/pokemonController')

router.get('/', pokemonController.getIndex)
router.get('/add-pokemon', pokemonController.getAddPokemon)
router.get('/pokedex', pokemonController.getAllPokemons)
router.get('/pokemon/:id', pokemonController.getPokemon)
router.post('/add-pokemon', pokemonController.addPokemon)

module.exports = router
