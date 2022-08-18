const express = require('express');
const peliRouter = require('./peliRouter');
function routerApi(app){
    const router = express.Router();
    app.use("/api/v1", router);
    router.use("/peliculas",peliRouter);
}

module.exports = routerApi;