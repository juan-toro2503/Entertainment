const bookModel = require('../models/bookModel');

class bookServices{
  async getBooks(){
    let books = bookModel.find()
    return books;
  }
}

module.exports = bookServices;