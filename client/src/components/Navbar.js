import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ marginBottom: '20px' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ display: 'inline', marginRight: '10px' }}>
                    <Link to="/">Home</Link>
                </li>
                <li style={{ display: 'inline', marginRight: '10px' }}>
                    <Link to="/AddBook">Add</Link>
                </li>
                <li style={{ display: 'inline', marginRight: '10px' }}>
                    <Link to="/register">Register</Link>
                </li>
                <li style={{ display: 'inline', marginRight: '10px' }}>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
