module.exports = (sequelize, DataTypes) => {
    const Tech = sequelize.define('Tech', {
          name: DataTypes.STRING,
        }, {
          sequelize,
          tableName: 'techs',
        })
    Tech.associate = (models) => {
      Tech.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'users' });
    }
    return Tech
}