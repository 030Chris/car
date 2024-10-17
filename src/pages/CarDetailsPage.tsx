import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, DollarSign, Fuel, Gauge } from 'lucide-react';

const CarDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data for demonstration
  const car = {
    id: 1,
    name: 'Tesla Model 3',
    price: '$39,990',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    year: 2024,
    mileage: '0 miles',
    fuelType: 'Electric',
    description: 'The Tesla Model 3 is an all-electric four-door sedan with minimalist styling and a high-tech interior. It offers impressive range, performance, and advanced driver assistance features.',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={car.image} alt={car.name} className="w-full h-96 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 lg:w-1/4 flex items-center mb-4">
              <Calendar className="mr-2 text-blue-500" />
              <span>{car.year}</span>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 flex items-center mb-4">
              <Gauge className="mr-2 text-blue-500" />
              <span>{car.mileage}</span>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 flex items-center mb-4">
              <Fuel className="mr-2 text-blue-500" />
              <span>{car.fuelType}</span>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 flex items-center mb-4">
              <DollarSign className="mr-2 text-blue-500" />
              <span className="text-2xl font-bold">{car.price}</span>
            </div>
          </div>
          <p className="text-gray-700 mb-6">{car.description}</p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
            Contact Dealer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;