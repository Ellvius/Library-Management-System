import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/bookService';

const GetBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getBooks();
      setBooks(booksData);
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
