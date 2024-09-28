import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios to make API calls

const GetBooks = () => {
  const [books, setBooks] = useState([]);

  // Fetch books function, originally from bookService
  const getBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/books'); // Replace with your backend URL
      setBooks(response.data); // Set books data in state
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      await getBooks(); // Call getBooks to fetch books
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Library Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <strong>{book.title}</strong> by {book.author} (ISBN: {book.isbn}) - {book.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetBooks;
