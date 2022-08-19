const express = require('express');

const serieController = require('../controllers/serieController');

const controllerSerie = new serieController();


const serieRouter = express.Router();

serieRouter.get("/getSeries",controllerSerie.getSeries)

module.exports = serieRouter;