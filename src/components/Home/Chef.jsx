import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight,FaThumbsUp  } from "react-icons/fa";
const Chef = ({ chef }) => {
    const { name, years_of_experience, number_of_recipes, likes, id, picture } = chef;
    return (
        <div className='m-4'>
            <div className="card card-compact bg-base-100 shadow-xl ">
                <figure>
                    <img src={picture} alt="chef" className="filter grayscale opacity-50 hover:filter-none hover:opacity-100 transition-all duration-300" />
                </figure>



                <div className="card-body">
                    <h2 className="card-title text-orange-400">{name}</h2>
                    <div className='flex'>
                        <p><span className='font-bold'>Exprience:</span>{years_of_experience}years</p>
                        <p><span className='font-bold'>Recipes:</span>{number_of_recipes}</p>
                    </div>
                    <div className="card-actions justify-end my-4 items-center">
                        <p className='font-bold text-orange-600 flex items-center'>
                            <span className='text-blue-600 mr-2'><FaThumbsUp/></span>
                            {likes}
                        </p>

                        <Link to={`/data/${id}`} className="btn btn-error  btn-outline">View Recieps<FaArrowRight /> </Link>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;