📚 Book API

A simple RESTful API built with Express.js for managing a list of books. This application uses in-memory storage (no database) and allows you to create, read, update, and delete books.

🚀 Features

Get all books

Get a specific book by ID

Add a new book

Update an existing book

Delete a book

🛠️ Tech Stack

Node.js

Express.js

📦 Installation
git clone https://github.com/your-username/book-api.git
cd book-api
npm install

▶️ Running the Server
node index.js


Server will run on:
📍 http://localhost:3000

📫 API Endpoints
➕ Add a Book

POST /books

Body:

{
  "title": "Book Title",
  "author": "Author Name"
}

📚 Get All Books

GET /books

📖 Get Book by ID

GET /books/:id

✏️ Update a Book

PUT /books/:id

Body (any of the fields):

{
  "title": "Updated Title",
  "author": "Updated Author"
}

❌ Delete a Book

DELETE /books/:id

🧪 Example (using curl)
# Add a new book
curl -X POST -H "Content-Type: application/json" \
    -d '{"title":"1984","author":"George Orwell"}' \
    http://localhost:3000/books

# Get all books
curl http://localhost:3000/books

# Update a book
curl -X PUT -H "Content-Type: application/json" \
    -d '{"title":"Animal Farm"}' \
    http://localhost:3000/books/1

# Delete a book
curl -X DELETE http://localhost:3000/books/1

📂 Project Structure
book-api/
├── index.js        # Main server file
├── package.json    # Project metadata and dependencies
└── README.md       # API documentation (this file)

📄 License

This project is licensed under the MIT License.