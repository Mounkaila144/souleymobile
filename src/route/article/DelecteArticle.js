const { Article } = require('../../db/squelize')

module.exports = (app) => {
    app.delete('/api/articles/:id', (req, res) => {
        Article.findByPk(req.params.id).then(Article => {
            const ArticleDeleted = Article;
            Article.destroy({
                where: { id: Article.id }
            })
                .then(_ => {
                    const message = `L'Article avec l'identifiant n°${ArticleDeleted.id} a bien été supprimé.`
                    res.json({message, data: ArticleDeleted })
                })
        })
    })
}