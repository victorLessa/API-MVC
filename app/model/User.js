// const connection = require("../database/index");
'use strict'

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',       
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING
        },
        {
            sequelize
        }
    )
    User.associate = (models) => {
        User.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
        User.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' });
    }
    return User
}
