const serieModel = require('../models/serieModel');

class serieServices {
  async getSeries(){
    let series = await serieModel.find();
    return series;
  }
}

module.exports = serieServices;