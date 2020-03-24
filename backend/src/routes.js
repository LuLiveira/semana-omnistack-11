const express = require('express');
const OngsController = require('./controller/OngsController');

const routes = express.Router();

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.store);

module.exports = routes;