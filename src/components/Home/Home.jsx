import React from 'react';
import banner from '../../assets/watercolor-dongzhi-festival-background_23-2149185896.avif'
const Home = () => {
    return (
      <div className='w-full m-auto'>
          <div className="relative bg-cover bg-center  bg-no-repeat w-full h-screen" style={{ backgroundImage: `url(${banner})` }}>
        <div className="absolute opacity-75"></div>
        <div className="container mx-auto h-full flex items-center justify-center text-white">
          <div className="text-center text-black">
            <h3 className="text-4xl font-bold mb-4">Experience the Flavors of Thai Cuisine</h3>
            <p className="text-lg">Discover the authentic taste of Thailand</p>
            <button className="mt-6 bg-white text-blue-500 font-semibold py-2 px-4 rounded">
              Explore Menu
            </button>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Home;