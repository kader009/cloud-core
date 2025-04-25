import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
  const { name, price, image } = product;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 max-w-sm w-full mx-auto">
      {/* Image Section */}
      <div className="w-full h-72 overflow-hidden">
        <img
          src={`https://admin.refabry.com/storage/product/${image}`}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Body Section */}
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-500 text-base mb-4">Price: {price}$</p>
        <Link to={`/product/${product.id}`}>
        
        <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300">
          View Product
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
