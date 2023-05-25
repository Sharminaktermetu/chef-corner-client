import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipes from './Recipes';

const Details = () => {
    const singleChef = useLoaderData()
    const { name,picture,short_bio,years_of_experience, number_of_recipes, likes,recipes} = singleChef
    return (
        <div className='w-9/12 m-auto mt-10'>
           
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{short_bio}</p>
                    <p><span className='font-bold text-red-500'>Years of exprience:</span> {years_of_experience}yr</p>
                    <p><span className='font-bold text-red-500'>Numbers of recips:</span> {number_of_recipes}</p>
                    <p><span className='font-bold text-red-500'>Likes: </span>{likes}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-center text-2xl font-extrabold my-16'>Popular recipes</h3>
            </div>
            {
                recipes.map((recipe,idx)=> <Recipes recipe={recipe} key={idx}></Recipes>)
            }

     


        </div>
    );
};

export default Details;