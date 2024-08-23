// src/components/Layout/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineLogin } from 'react-icons/ai';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="text-2xl font-bold">
        <Link to="/">AI Fitness</Link>
      </div>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-gray-400"><AiOutlineHome /> Home</Link>
        <Link to="/profile" className="hover:text-gray-400"><AiOutlineUser /> Profile</Link>
        <Link to="/login" className="hover:text-gray-400"><AiOutlineLogin /> Login</Link>
      </nav>
    </header>
  );
};

export default Header;
