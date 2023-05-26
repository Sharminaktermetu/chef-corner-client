import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaGratipay } from "react-icons/fa";
const Recipes = ({recipe}) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const {recipe_name,cooking_method,ingredients,rating}=recipe
    const handleFavorite = () => {
        setIsFavorite(true);
        toast('Recipe added as favorite');
      };
    return (
        <div className='border border-red-500 my-5 p-10 rounded-lg'>
            <div>
                <h4 className='font-bold'>Ingridnes</h4>
                <ul>
                    {ingredients.map((ingredient,idx)=><li key={idx}>.{ingredient}</li>)}
                </ul> 
            </div>
            <p><span className='font-bold'>{recipe_name} </span>{cooking_method}</p>

           <div className='flex items-center justify-center'>
           <p className='text-red-600 flex-1'>Rating: {rating}</p>
            <div className='flex justify-end'>
            <button className="justify-end bg-red-500 btn" onClick={handleFavorite} disabled={isFavorite}>
            <Toaster />
       <FaGratipay className='text-3xl'></FaGratipay>
      </button>
            </div>
           </div>
        </div>
    );
};

export default Recipes;