const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  nameBook:{type: String},
  autor:{type: String},
  biography:{type: String},
  genero:{type: String},
})

const bookModel = mongoose.model('books',bookSchema)
module.exports = bookModel;