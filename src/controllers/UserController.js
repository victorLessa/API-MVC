const { User, Address } = require('../model/index');
const { sequelize } = require('../model/index')
module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async store(req, res) {
    const { name, email } = req.body;

    const user = await sequelize.transaction().then(t => {
      return User.create(
        {
          name: name,
          email: email
        },
        { transaction: t }
      )
        .then(user => {
          return Address.create(
            {
              user_id: user.dataValues.id,
              zipcode: "123456",
              street: "Alfredo Backer",
              number: 536
            },
            { transaction: t }
          );
        })
        .then(async data => {
          t.commit();
          const user = await User.findByPk(data.dataValues.user_id, {
            include: {
              association: "addresses"
            }
          });
          return user.dataValues;
        })
        .catch(err => {
          return t.rollback();
        });
    });
    return res.json(user);
  }
};