import React from 'react';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-40 object-cover" src={imageSrc} alt="Card Image" />
      <div className="px-6 py-4">
        <h2 className="text-gray-800 text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
