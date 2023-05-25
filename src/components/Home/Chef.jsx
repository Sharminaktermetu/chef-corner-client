import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    console.log(chef);
    const { name, years_of_experience, number_of_recipes, likes,id } = chef;
    return (
        <div className='m-4'>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex'>
                    <p><span className='font-bold'>Exprience:</span>{years_of_experience}years</p>
                    <p><span className='font-bold'>Recipes:</span>{number_of_recipes}</p>
                    </div>
                    <div className="card-actions justify-end">
                    <p className='p-3'><span className='font-bold'>Likes:</span>{likes}</p>
                     <Link to={`/data/${id}`} className="btn btn-primary">View Recieps</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;