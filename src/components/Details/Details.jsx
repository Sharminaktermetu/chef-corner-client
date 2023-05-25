import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const singleChef =useLoaderData()
  const{name}=singleChef
    return (
        <div>
        <p>{name}</p>
        </div>
    );
};

export default Details;