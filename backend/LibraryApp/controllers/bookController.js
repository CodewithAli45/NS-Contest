const Book = require("../models/bookModel");

const createBookDetails = async (req, res) => {
    const {title, description, genre, author, rating, review, FavQuotes, section} = req.body;
    try {
        const books = new Book({
            title, description, genre, author, rating, review, FavQuotes, section
        });

        await Book.create(books);
        res.status(201).json({
            msg: "Book added successfully", 
            books
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}


const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        if(books.length < 1){
            res.status(400).json({
                msg: "no books available",
                status: "failure"
            })
        }
        res.status(200).json({
            msg: "Following books avaialbe", 
            books
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const getBookById = async (req, res) => {
    const {id} = req.params;
    try {
        const book = await Book.findById(id);
        if(!book){
            res.status(400).json({
                msg: "book not available",
                status: "failure"
            })
        }
        res.status(200).json({
            msg: "success", 
            book
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const updateBook = async (req, res) => {
    const {id} = req.params;
    const {updatedData} = req.body;
    try {
        const book = await Book.findByIdAndUpdate(id,{$set: updatedData});
        if(!book){
            res.status(400).json({
                msg: "book not available",
                status: "failure"
            })
        }
        await book.save();
        res.status(201).json({
            msg: "updated book", 
            book
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const deleteBook = async (req, res) => {
    const {id} = req.params;
    try {
        const book = await Book.findByIdAndDelete(id);
        if(!book){
            res.status(400).json({
                msg: "book not available",
                status: "failure"
            })
        }
        res.status(200).json({
            msg: "delted book", 
            book
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}



module.exports = {
    createBookDetails,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
}