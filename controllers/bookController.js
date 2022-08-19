const bookServices = require('../services/bookServices');

const serviceBook = new bookServices();
class bookController{
  getBooks(req,res){
    let books = serviceBook.getBooks();
    books.then((resolve)=>{
      res.json(resolve)
    })
  }
}

module.exports = bookController;