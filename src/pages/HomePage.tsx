import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const featuredCars = [
  { id: 1, name: 'Tesla Model 3', price: '$39,990', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { id: 2, name: 'Ford Mustang', price: '$27,470', image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { id: 3, name: 'BMW X5', price: '$59,400', image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
];

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="bg-blue-500 text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h1 className="text-4xl font-bold mb-4">Find Your Dream Car</h1>
            <p className="text-xl">Explore our wide range of quality vehicles</p>
          </div>
          <div className="w-full md:w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search cars..."
                className="w-full py-2 px-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-600">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <p className="text-gray-600 mb-4">{car.price}</p>
                <Link
                  to={`/car/${car.id}`}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Why Choose OTIS AutoXpress?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p>Choose from hundreds of quality vehicles to find your perfect match.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
            <p>Get the best deals with our transparent and fair pricing policy.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p>Our knowledgeable staff is here to assist you every step of the way.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;