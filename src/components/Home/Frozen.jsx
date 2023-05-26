import React from 'react';
import Card from './Card';

const Frozen = () => {
    const cardData = [
        {
          imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkTEc2g7EkAJhPDyv5PWS_FlMTVMW1S5j_qpjkZjN7g&s',
          title: 'Thai rolled ice cream',
          description: 'Thai rolled ice cream -- also known as stir-fried ice cream -- is a global phenomenon of ice cream delight. ',
        },
        {
          imageSrc: 'https://makansutra.com/wp-content/uploads/2018/07/1040f9_picture-2.jpg',
          title: 'KOKO ICE CREAM',
          description: "Tempt your taste buds with our creamy, indulgent flavors crafted with love and the finest ingredients."
        },
        {
          imageSrc: 'https://www.thecookierookie.com/wp-content/uploads/2016/01/thai-iced-coffee-4-of-10-500x375.jpg',
          title: 'Thai Iced Coffee',
          description: 'This Thai iced coffee recipe is perfectly sweet, and can be spiked with amaretto for a cocktail',
        },
      ];
    return (
        <div>
            <h3 className='text-4xl font-bold text-center p-10'><span className='border-red-500 border-b-4'>A Frozen Treat</span></h3>
            <div className="flex flex-wrap justify-center">
      {cardData.map((card, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
          <Card {...card} />
        </div>
      ))}
    </div>

        </div>
    );
};

export default Frozen;