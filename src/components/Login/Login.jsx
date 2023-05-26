import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const {signIn,googleLogIn}=useContext(AuthContext)
    const handleLogIn=event=>{
        event.preventDefault()
        const form=event.target;
   
        const email =form.email.value;
        const password =form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            const theUser =result.user;
            console.log(theUser);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const handleGoogle=()=>{
        googleLogIn()
        .then((result)=>{
            const userIs =result.user
            console.log(userIs);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form onSubmit={handleLogIn}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
              type='text'
                name="email"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
              type='password'
                name="password"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6 flex items-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center mb-6">
            <div className="border-t border-gray-300 flex-grow mr-3"></div>
            <span className="text-gray-500">or sign in with</span>
            <div className="border-t border-gray-300 flex-grow ml-3"></div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md focus:outline-none"
              onClick={handleGoogle}
            >
             
              Google Sign-in
            </button>
            <button
              type="button"
              className="flex items-center bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none"
            >
              GitHub Sign-in
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
             <small>Don't have an account? <Link to="/signup" className='btn-link'>Sign up</Link></small>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;