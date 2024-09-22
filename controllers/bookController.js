import {Book} from "../models/Book.js"

// Create a new book
export const createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all books
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific book by ID
export const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a book by ID
export const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a book by ID
export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.status(200).json({ message: 'Book deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
