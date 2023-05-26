import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { name, years_of_experience, number_of_recipes, likes, id, picture } = chef;
    return (
        <div className='m-4'>
            <div className="card card-compact bg-base-100 shadow-xl ">
                <figure>
                    <img src={picture} alt="chef" className="w-300 h-300 filter grayscale opacity-50 hover:filter-none hover:opacity-100 transition-all duration-300" />
                </figure>



                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex'>
                        <p><span className='font-bold'>Exprience:</span>{years_of_experience}years</p>
                        <p><span className='font-bold'>Recipes:</span>{number_of_recipes}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <p className='p-3'><span className='font-bold'>Likes:</span>{likes}</p>
                        <Link to={`/data/${id}`} className="btn btn-error  btn-outline">View Recieps</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;