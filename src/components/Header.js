
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Weather App</h1>
      <nav>
        <Link to="/">Home</Link>
        {/* Add more navigation links as needed */}
      </nav>
    </header>
  );
};

export default Header;
