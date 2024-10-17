import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Car size={32} />
          <span className="text-2xl font-bold">OTIS AutoXpress</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/" className="hover:text-blue-200">Inventory</Link></li>
            <li><Link to="/" className="hover:text-blue-200">About</Link></li>
            <li><Link to="/" className="hover:text-blue-200">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;