const { Article } = require('../../db/squelize')

module.exports = (app) => {
    app.get('/api/articles', (req,res) => {
        Article.findAll()
            .then(articles => {
                const message = 'La liste des pokémons a bien été récupérée.'
                res.json({ message, data: articles })
            })
            .catch(error => {
                const message = `La liste des pokémons n'a pas pu être récupéré. 
                         Réessayez dans quelques instants.`
                res.status(500).json({ message, data: error })
            })
    })
}