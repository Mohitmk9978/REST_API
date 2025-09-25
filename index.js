const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory book list
let books = [];
let idCounter = 1;

// GET /books - Retrieve all books
app.get('/books', (req, res) => {
    res.json(books);
});

// GET /books/:id - Get a specific book
app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
});

// POST /books - Add a new book
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ message: 'Title and author are required' });
    }
    const newBook = { id: idCounter++, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT /books/:id - Update a book
app.put('/books/:id', (req, res) => {
    const { title, author } = req.body;
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: 'Book not found' });

    if (title) book.title = title;
    if (author) book.author = author;

    res.json(book);
});

// DELETE /books/:id - Delete a book
app.delete('/books/:id', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).json({ message: 'Book not found' });

    const deletedBook = books.splice(bookIndex, 1);
    res.json(deletedBook[0]);
});

// Start the server
app.listen(3000, () => {
    console.log(`Book API server running at http://localhost:${port}`);
});
