import React from 'react';

const Recipes = ({recipe}) => {
    const {recipe_name,cooking_method,ingredients}=recipe
    return (
        <div className='border border-red-500 my-5 p-10 rounded-lg'>
            <div>
                <h4 className='font-bold'>Ingridnes</h4>
                <ul>
                    {ingredients.map(ingredient=><li>.{ingredient}</li>)}
                </ul> 
            </div>
            <p><span className='font-bold'>{recipe_name} </span>{cooking_method}</p>
            
        </div>
    );
};

export default Recipes;