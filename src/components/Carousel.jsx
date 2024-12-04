import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Importing React Icons
import { useNavigate } from 'react-router-dom';

const PrevNextButtons = ({product}) => {
    const navigate = useNavigate();
  const handlePrevClick = () => {
    console.log('Prev button clicked');
    navigate(`/products/${product.id-1}`)
  };

  const handleNextClick = () => {
    console.log('Next button clicked');
    navigate(`/products/${product.id+1}`)
  };

  return (
    <div className="flex justify-center items-center space-x-4 mt-1">
      {/* Prev Button */}
      <button
        onClick={handlePrevClick}
        className="bg-gray-800 text-white p-4 rounded-full hover:bg-gray-600 transition-all"
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNextClick}
        className="bg-gray-800 text-white p-4 rounded-full hover:bg-gray-600 transition-all"
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

export default PrevNextButtons;
