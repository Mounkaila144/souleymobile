module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Article', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prix: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}
