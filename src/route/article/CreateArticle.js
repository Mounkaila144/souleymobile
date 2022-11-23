const { Article } = require('../../db/squelize')

module.exports = (app) => {
    app.post('/api/articles', (req, res) => {
        Article.create(req.body)
            .then(Article => {
                const message = `L'Article' ${req.body.name} a bien été crée.`
                res.json({ message, data: Article })
            })
    })
}