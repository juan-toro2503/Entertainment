const peliServices = require('../services/peliServices')

const serviPeliculas = new peliServices();

class peliController {
    getPeliculas(req,res){
        let peliculas = serviPeliculas.getPeliculas()
        peliculas.then((resolve)=>{
          res.json(resolve)
        })
    }

}

module.exports = peliController;