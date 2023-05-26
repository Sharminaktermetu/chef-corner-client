import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const ChefsInfo = () => {
    const[chefs, setChefs]=useState([])
    useEffect(()=>{
        fetch('https://server-chef-adsmarketersaif13-gmailcom.vercel.app/data')
        .then(res=>res.json())
        .then(data=>setChefs(data))
    },[])
    return (
        <div>
            <div>
                <h3 className='text-3xl font-bold text-center p-10'>Chefes info here</h3>
            </div>
            <div className='grid lg:grid-cols-3 m-auto w-9/12'>
            {chefs.map(chef=><Chef key={chef.likes} chef={chef}></Chef>)}
            </div>
         </div>
    );
};

export default ChefsInfo;