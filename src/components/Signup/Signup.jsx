import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

const handleSignUp=(event)=>{
    event.preventDefault()
    const name =event.target.text.value;
    const email =event.target.email.value;
    const password =event.target.password.value;
    const photo =event.target.photo.value;
  console.log(name,email,password,photo);
}

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <form onSubmit={handleSignUp} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-6">
            
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                name='text'

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
               name='photo'
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
          </form>
        </div>
      </div>
    );
};

export default Signup;