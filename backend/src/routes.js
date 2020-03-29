const express = require('express');

const BathController = require('./controllers/BathController');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const ShitController = require('./controllers/ShitController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

routes.post('/users', UserController.create);

routes.post('/session', SessionController.create);

routes.get('/bathrooms',BathController.index)
routes.post('/bathrooms', BathController.create);
routes.delete('/bathrooms/:id', BathController.delete);

routes.get('/profile', ProfileController.index);

routes.get('/shits', ShitController.index);
routes.post('/shits/:bathroom_id', ShitController.create);
routes.delete('/shits/:id', ShitController.delete);




module.exports = routes;

