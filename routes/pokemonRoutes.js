const express = require('express')
const router = express.Router()
const pokemonController = require('../controllers/pokemonController')
const treinadorController = require('../controllers/treinadorController')

router.get('/', pokemonController.getIndex)

router.get('/pokedex', pokemonController.getAllPokemons)
router.get('/pokemon/:id', pokemonController.getPokemon)
router.get('/add-pokemon', pokemonController.getAddPokemon)
router.post('/add-pokemon', pokemonController.addPokemon)

router.get('/treinadores', treinadorController.getAllTreinadores)
router.get('/treinador/:id', treinadorController.getTreinador)
router.get('/add-treinador', treinadorController.getAddTreinador)
router.post('/add-treinador', treinadorController.addTreinador)


module.exports = router
