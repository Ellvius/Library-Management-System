
# Library Management system

A RESTful API built with **Express.js** and **MongoDB** that allows users to manage a collection of books (Library System). The API provides full CRUD (Create, Read, Update, Delete) operations, with authentication implemented using **JWT**.

## Features

- Full set of CRUD operations on books (create, read, update, delete).
- **MongoDB** for data storage using **Mongoose** ODM.
- **JWT authentication** for secure access to protected routes.
- Error handling for invalid inputs and non-existent resources.

## Tech Stack

- **Node.js** with **Express.js** (Backend framework)
- **MongoDB** (NoSQL database)
- **Mongoose** (MongoDB ODM)
- **JWT** (JSON Web Token for authentication)
- **Postman** (for testing the API)

## Requirements

To run this project, you need to have:

- **Node.js** (v12 or higher)
- **MongoDB** (local or remote instance)
- **Postman** (optional, for testing)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/library-system-api.git
   cd Library-Management-System
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the server:
   ```bash
   nodemon server.js
   ```

   The server should now be running on `http://localhost:5000`.

## API Endpoints

### Authentication

#### 1. Register a User
- **POST** `/api/auth/register`
- Request Body:
  ```json
  {
      "username": "your_username",
      "password": "your_password"
  }
  ```
- Response: JWT Token

#### 2. Login User
- **POST** `/api/auth/login`
- Request Body:
  ```json
  {
      "username": "your_username",
      "password": "your_password"
  }
  ```
- Response: JWT Token

### Books Resource

#### 3. Create a Book (Protected)
- **POST** `/api/books`
- Headers: 
  - `Authorization`: `Bearer <your_jwt_token>`
- Request Body:
  ```json
  {
      "title": "Book Title",
      "author": "Author Name",
      "isbn": "1234567890",
      "publishedDate": "2023-01-01",
      "pages": 300
  }
  ```
- Response: Created Book

#### 4. Get All Books
- **GET** `/api/books`
- Response: List of all books

#### 5. Get a Single Book by ID
- **GET** `/api/books/:id`
- Response: Book details

#### 6. Update a Book by ID (Protected)
- **PUT** `/api/books/:id`
- Headers: 
  - `Authorization`: `Bearer <your_jwt_token>`
- Request Body:
  ```json
  {
      "title": "Updated Book Title",
      "author": "Updated Author Name",
      "isbn": "0987654321",
      "publishedDate": "2023-05-01",
      "pages": 350
  }
  ```
- Response: Updated Book

#### 7. Delete a Book by ID (Protected)
- **DELETE** `/api/books/:id`
- Headers: 
  - `Authorization`: `Bearer <your_jwt_token>`
- Response: Success message

### Error Handling

- **400 Bad Request**: Returned for invalid inputs.
- **404 Not Found**: Returned when trying to access non-existent books or routes.
- **401 Unauthorized**: Returned for protected routes without a valid JWT token.

## Testing the API

1. Use **Postman** to test each endpoint.
2. Ensure you include the `Authorization` header with your JWT token for protected routes.
3. For more details on testing, see the Postman collection examples in the `/docs` folder.

## License

This project is licensed under the MIT License.
