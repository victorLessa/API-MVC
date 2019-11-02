module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
        zipcode: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
      }, {
        sequelize
      })
    Address.associate = (models) => {
      Address.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
    return Address
}