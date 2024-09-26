import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update here
import Navbar from './components/Navbar'; // Import the Navbar
import Register from './components/Register';
import Login from './components/Login';
import GetBooks from './components/GetBooks';
import AddBook from './components/AddBook';

const App = () => {
    return (
        <Router>
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
                <h1>Library System</h1>
                
                {/* Include the Navbar */}
                <Navbar />

                {/* Update to use Routes instead of Switch */}
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/AddBook" element={<AddBook />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<GetBooks />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
