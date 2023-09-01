import React from 'react';

const AnotherSection = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Our Culinary Community</h2>
        <p className="text-gray-700 mb-6">
          At Chef Corner, we're passionate about bringing food lovers together. Join our thriving community to share your
          culinary journey, get inspired by fellow chefs, and explore a world of flavors.
        </p>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none">
          Start Cooking Together
        </button>
      </div>
    </section>
  );
};

export default AnotherSection;
