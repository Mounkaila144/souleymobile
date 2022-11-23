const { Pokemon } = require('../db/squelize')
const auth = require('../auth/auth')

module.exports = (app) => {
    app.get('/api/pokemons',auth, (req,res) => {
        Pokemon.findAll()
            .then(pokemons => {
                const message = 'La liste des pokémons a bien été récupérée.'
                res.json({ message, data: pokemons })
            })
            .catch(error => {
                const message = `La liste des pokémons n'a pas pu être récupéré. 
                         Réessayez dans quelques instants.`
                res.status(500).json({ message, data: error })
            })
    })
}