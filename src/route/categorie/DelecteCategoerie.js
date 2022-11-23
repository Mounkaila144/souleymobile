const { Categorie } = require('../../db/squelize')

module.exports = (app) => {
    app.delete('/api/categories/:id', (req, res) => {
        Categorie.findByPk(req.params.id).then(Categorie => {
            const CategorieDeleted = Categorie;
            Categorie.destroy({
                where: { id: Categorie.id }
            })
                .then(_ => {
                    const message = `La categorie avec l'identifiant n°${CategorieDeleted.id} a bien été supprimé.`
                    res.json({message, data: CategorieDeleted })
                })
        })
    })
}