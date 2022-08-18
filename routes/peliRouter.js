const express = require('express');
const peliController = require('../controllers/peliController');
const controllerPeli = new peliController();
const peliRouter = express.Router();

peliRouter.get("/getPeliculas",controllerPeli.getPeliculas)

module.exports = peliRouter;