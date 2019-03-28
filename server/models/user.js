'use strict'

module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        first: DataTypes.STRING,
        last: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        isActive: DataTypes.BOOLEAN
    })
    
    User.associate = (models) =>{
        models.User.belongsToMany(models.Book, {
            as: 'Reading',
            through: 'ReadingList'
        })
        models.User.hasOne(models.Favorite)
    }

    return User
}
