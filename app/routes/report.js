const express = require('express')
const ReportController = require('../controllers/ReportController');

const routes = express.Router();

routes.get('/report', ReportController.show);

module.exports = routes