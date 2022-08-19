const peliModel = require('../models/peliModel');

class peliServices {
  async getPeliculas(){
    const peliculas = await peliModel.find();
    return peliculas;
  }
}

module.exports = peliServices;