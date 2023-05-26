import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const Header = () => {
  const {user,logOut}=useContext(AuthContext)
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(()=>{})
  }

    return (
        <div>
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to="/" className='text-4xl font-bold'><span className='text-red-400'>Ch</span>ef Corn<span className='text-red-400'>er</span></Link>
  </div>
  <div className="flex-2 gap-2">
   <Link to="/">Home</Link>
   <Link to="/login">Login</Link>
   <Link to="/signup">Signup</Link>

   {user&&
        <>
           <img className='w-9 h-9' src={user.photoURL} alt=""   title={user.email} />
            <button className='btn-error btn' onClick={handleLogOut}>Log out</button>
        </>
  }

    
    </div>
  </div>
</div>
       
    );
};

export default Header;