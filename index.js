const express = require("express")
const bodyParser = require("body-parser")
let squelize = require("./src/db/squelize")

const app = express()
const port = process.env.PORT || 3000
app
    .use(bodyParser.json())
squelize.initDb()

require("./src/route/categorie/findAllCategoerie")(app)
require("./src/route/categorie/findByPkCategoerie")(app)
require("./src/route/categorie/createCategoerie")(app)
require("./src/route/categorie/updateCategoerie")(app)
require("./src/route/categorie/DelecteCategoerie")(app)

require("./src/route/article/findAllArticle")(app)
require("./src/route/article/findByPkArticle")(app)
require("./src/route/article/createArticle")(app)
require("./src/route/article/updateArticle")(app)
require("./src/route/article/DelecteArticle")(app)


require("./src/route/login")(app)

app.use(({res}) => {
    const message = 'Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
    res.status(404).json({message});
});


app.listen(port, () => console.log(`Notre application Noe demare sur le port :${port}`))