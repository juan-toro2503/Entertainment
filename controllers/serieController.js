const serieServices = require('../services/serieServices');

const servicesSerie = new serieServices();
class serieController{
  getSeries(req,res){
    let series = servicesSerie.getSeries();
    series.then((resolve)=>{
      res.json(resolve)
    })
    
    
  }
}

module.exports = serieController;