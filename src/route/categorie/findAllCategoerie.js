const { Categorie } = require('../../db/squelize')


module.exports = (app) => {
    app.get('/api/categories', (req,res) => {
        Categorie.findAll()
            .then(categories => {
                const message = 'La liste des categories a bien été récupérée.'
                res.json({ message, data: categories })
            })
            .catch(error => {
                const message = `La liste des categories n'a pas pu être récupéré. 
                         Réessayez dans quelques instants.`
                res.status(500).json({ message, data: error })
            })
    })
}