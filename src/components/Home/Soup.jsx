import React from 'react';

const Soup = () => {
    return (
        <div className='w-9/12  grid lg:grid-cols-2 m-auto items-center mb-20'>
            <img src="https://static.vecteezy.com/system/resources/previews/021/609/098/original/tom-yum-kung-soup-traditional-thai-spicy-soup-png.png" alt=""  className='w-9/12'/>
            <div>
            <span className='text-bold font-semibold text-error text-2xl'>Tom Yum Soup</span>
            <p className='text-2xl font-thin'> The flavor of tom yum should be sour upfront from lime juice, then salty from fish sauce, with a mild sweetness from nam prik pao paste. You might not be able to necessarily taste the lemongrass and makrut lime leaves, but these aromatics should hit your nose while you slurp.</p>
            </div>
        </div>
    );
};

export default Soup;