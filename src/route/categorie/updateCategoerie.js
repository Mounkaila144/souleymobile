const { Categorie } = require('../../db/squelize')

module.exports = (app) => {
    app.put('/api/categories/:id', (req, res) => {
        const id = req.params.id
        Categorie.update(req.body, {
            where: { id: id }
        })

            .then(_ => {
                Categorie.findByPk(id).then(Categorie => {
                    const message = `La categorie ${Categorie.name} a bien été modifié.`
                    res.json({message, data: Categorie })
                })
            })
    })
}