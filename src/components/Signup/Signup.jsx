import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Signup = () => {
  
  const{createUser}=useContext(AuthContext)
  const[error,setError]=useState('')

const handleSignUp=(event)=>{
    event.preventDefault()
    const form=event.target;
    const name =form.text.value;
    const email =form.email.value;
    const password =form.password.value;
    const photoURL =form.photoURL.value;
    setError('')
  if (password.length<6) {
   setError("Password must be 6 charecter")
   return;
  }
  createUser(email,password,photoURL)
  .then(result=>{
    const loggedUser =result.user;
    return loggedUser.updateProfile({
      photoURL: photoURL
    });
   
  })
  .then(error=>{
    console.log(error);
  })
}

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <h3 className='text-4xl font-bold text-center p-4'>Please Regist<span className='text-rose-500'>er</span></h3>
          <form onSubmit={handleSignUp} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-6">
            
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                name='text'
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
               name='email'
              required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                name='password'

              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoUrl">
                Photo URL
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="photoUrl"
                type="text"
                placeholder="Enter your photo URL"
               name='photoURL'
               required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>

            <small>Already have an account? <Link to="/login" className='btn-link'> Login</Link></small>
            <p className='text-error'>{error}</p>
          </form>
         
        </div>
      </div>
    );
};

export default Signup;