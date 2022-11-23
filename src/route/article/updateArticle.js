const { Article } = require('../../db/squelize')

module.exports = (app) => {
    app.put('/api/articles/:id', (req, res) => {
        const id = req.params.id
        Article.update(req.body, {
            where: { id: id }
        })

            .then(_ => {
                Article.findByPk(id).then(Article => {
                    const message = `L'article ${Article.name} a bien été modifié.`
                    res.json({message, data: Article })
                })
            })
    })
}