
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
const Review = () => {
    return (

             <div className='p-5 w-2/3 mx-auto'>
              <h3 className='text-4xl font-bold text-center p-10'><span className='border-red-500 border-b-4'>Reviews</span></h3>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <div className="bg-white p-6 rounded shadow px-9">
          <p className="text-gray-800 px-9">
            "Absolutely loved the recipes on this website! The step-by-step instructions made it easy for me to try new
            dishes and impress my family."
          </p>
          <p className="mt-3 font-semibold px-9">- Jessica R.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-white p-6 rounded shadow-md px-9">
          <p className="text-gray-800 px-9">
            "As a professional chef, I find the diverse range of recipes here both inspiring and delightful. This website
            is a treasure trove for culinary enthusiasts."
          </p>
          <p className="mt-3 font-semibold px-9">- Michael S.</p>
        </div>
      </SwiperSlide>
      </Swiper>
    </div>
       
    );
};

export default Review;