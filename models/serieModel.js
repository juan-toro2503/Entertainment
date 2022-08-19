const mongoose = require('mongoose');

const serieSchema = mongoose.Schema({
    nombre:{type: String},
    duracion:{type: String},
    sipnosis:{type: String},
    protagonistas:{type: String},
    lanzamiento:{type: String},
    imagen:{type: String},
    info: {type: String}
})

const serieModel = mongoose.model('series',serieSchema);

module.exports = serieModel;