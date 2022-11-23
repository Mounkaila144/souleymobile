const { Sequelize, DataTypes } = require('sequelize')
const CategorieModel = require('../models/categorie')
const pokemons = require('./pokemon')
const bcrypt = require('bcrypt')
const UserModel = require('../models/user')
const articleModel = require('../models/article')

if(process.env.NODE_ENV === 'production') {
    sequelize = new Sequelize('kk8u5y871hfoaw9y', 't09tvm6qofrtvc7h', 'ryujse9ftf40wpqn', {
        host: 'klbcedmmqp7w17ik.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        dialect: 'mariadb',
        dialectOptions: {
            timezone: 'Etc/GMT-2',
        },
        logging: true
    })
} else {
    sequelize = new Sequelize('nodedb', 'root', '', {
        host: 'localhost',
        dialect: 'mariadb',
        dialectOptions: {
            timezone: 'Etc/GMT-2',
        },
        logging: false
    })

}


const User = UserModel(sequelize, DataTypes)
const Categorie = CategorieModel(sequelize, DataTypes)
const Article = articleModel(sequelize, DataTypes)
Categorie.hasMany(Article,
    {foreignKey: {
            allowNull: false
        }})
Article.belongsTo(Categorie,
    {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }
)
const initDb = () => {
    return sequelize.sync({force: true}).then(_ => {
        // pokemons.map(pokemon => {
        //     Categorie.create({
        //         name: pokemon.name,
        //         hp: pokemon.hp,
        //         cp: pokemon.cp,
        //         picture: pokemon.picture,
        //         types: pokemon.types
        //     }).then(pokemon => console.log(pokemon.toJSON()))
        // })
        bcrypt.hash('pikachu', 10)
            .then(hash => User.create({ username: 'pikachu', password: hash }))
            .then(user => console.log(user.toJSON()))

        console.log('La base de donnée a bien été initialisée !')
    })
}

module.exports = {
    initDb, Categorie, User,Article
}