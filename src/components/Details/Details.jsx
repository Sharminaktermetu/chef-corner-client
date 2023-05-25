import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipes from './Recipes';

const Details = () => {
    const singleChef = useLoaderData()
    const { name,picture,short_bio,years_of_experience, number_of_recipes, likes,recipes} = singleChef
    console.log(recipes);
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
            {
                recipes.map(recipe=> <Recipes recipe={recipe}></Recipes>)
            }

        {/* <div className="flex flex-wrap -mx-4">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Recipe 1</h2>
            <p className="text-gray-700 mb-2">Description of Recipe 1.</p>
            <p className="text-gray-700">Ingredients: Ingredient 1, Ingredient 2, Ingredient 3.</p>
            </div>
        </div>
        </div> */}


        </div>
    );
};

export default Details;