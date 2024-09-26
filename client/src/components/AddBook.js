import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/books'; // Adjust based on your backend URL

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    isbn: '',
    publishedYear: '',
    publisher: '',
    category: '',
    pages: 0,
    description: '',
    totalCopies: 1,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const addBook = async (bookData) => {
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjVjNGE2MDY1Y2ZkNjc0MmU0YjE0ZiIsImlhdCI6MTcyNzM4NTUyOCwiZXhwIjoxNzI3Mzg5MTI4fQ.bjvCpnyH7oqnC7tpmU06lKtKlasc9paj07Chb2jNAlE`, // Replace with your actual JWT token
      },
    };
    
    try {
      const response = await axios.post(API_URL, bookData, config);
      return response.data;
    } catch (error) {
      throw error; // Rethrow the error to handle it in the calling function
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ensure that pages and totalCopies are positive numbers
      if (bookData.pages < 0 || bookData.totalCopies < 1) {
        setMessage('Pages and Total Copies must be positive values.');
        return;
      }

      await addBook(bookData);
      setMessage('Book added successfully!');
      // Reset the form after successful submission
      setBookData({
        title: '',
        author: '',
        isbn: '',
        publishedYear: '',
        publisher: '',
        category: '',
        pages: 0,
        description: '',
        totalCopies: 1,
      });
    } catch (error) {
      setMessage('Error adding book: ' + (error.response ? error.response.data : error.message));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={bookData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="author"
          value={bookData.author}
          onChange={handleChange}
          placeholder="Author"
          required
        />
        <input
          type="text"
          name="isbn"
          value={bookData.isbn}
          onChange={handleChange}
          placeholder="ISBN"
          required
        />
        <input
          type="number"
          name="publishedYear"
          value={bookData.publishedYear}
          onChange={handleChange}
          placeholder="Published Year"
        />
        <input
          type="text"
          name="publisher"
          value={bookData.publisher}
          onChange={handleChange}
          placeholder="Publisher"
        />
        <input
          type="text"
          name="category"
          value={bookData.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <input
          type="number"
          name="pages"
          value={bookData.pages}
          onChange={handleChange}
          placeholder="Pages"
        />
        <textarea
          name="description"
          value={bookData.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="totalCopies"
          value={bookData.totalCopies}
          onChange={handleChange}
          placeholder="Total Copies"
          required
        />
        <button type="submit">Add Book</button>
      </form>
      {message && <p>{message}</p>} {/* Display feedback message */}
    </div>
  );
};

export default AddBook;
