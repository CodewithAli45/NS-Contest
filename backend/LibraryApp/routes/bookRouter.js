const { createBookDetails, getBooks, getBookById, updateBook, deleteBook } = require('../controllers/bookController');

const bookRouter = require('express').Router();

bookRouter.post('/createbook', createBookDetails);
bookRouter.get('/getbooks', getBooks);
bookRouter.get('/getbookbyid/:id', getBookById);
bookRouter.patch('/update/:id', updateBook);
bookRouter.delete('/delete/:id', deleteBook);

module.exports = bookRouter;