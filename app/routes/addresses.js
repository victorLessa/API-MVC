const express = require('express')
const AddressController = require('../controllers/AddressController');

const routes = express.Router();

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

module.exports = routes