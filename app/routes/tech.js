const express = require('express')
const TechController = require('../controllers/TechController');

const routes = express.Router();

routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);

module.exports = routes