const { Article } = require('../../db/squelize')

module.exports = (app) => {
    app.get('/api/articles/:id', (req, res) => {
        Article.findByPk(req.params.id)
            .then(Article => {
                if(Article === null) {
                    const message = `L'Article demandé n'existe pas. Réessayez avec un autre identifiant.`
                    return res.status(404).json({ message })
                }

                const message = 'Un article a bien été trouvé.'
                res.json({ message, data: Article })
            })
            .catch(error => {
                //console log
                const message = `L'article n'a pas pu être récupéré. Réessayez dans quelques instants.`
                res.status(500).json({ message, data: error })
            })
    })
}