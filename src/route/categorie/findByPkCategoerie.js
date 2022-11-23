const { Categorie } = require('../../db/squelize')

module.exports = (app) => {
    app.get('/api/categories/:id', (req, res) => {
        Categorie.findByPk(req.params.id)
            .then(Categorie => {
                if(Categorie === null) {
                    const message = `La categorie demandé n'existe pas. Réessayez avec un autre identifiant.`
                    return res.status(404).json({ message })
                }

                const message = 'Un pokémon a bien été trouvé.'
                res.json({ message, data: Categorie })
            })
            .catch(error => {
                //console log
                const message = `La categorie n'a pas pu être récupéré. Réessayez dans quelques instants.`
                res.status(500).json({ message, data: error })
            })
    })
}