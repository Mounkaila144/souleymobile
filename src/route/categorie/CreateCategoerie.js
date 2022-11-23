const { Categorie } = require('../../db/squelize')

module.exports = (app) => {
    app.post('/api/categories', (req, res) => {
        Categorie.create(req.body)
            .then(Categorie => {
                const message = `La categorie ${req.body.name} a bien été crée.`
                res.json({ message, data: Categorie })
            })
    })
}