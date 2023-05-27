import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FaBars, FaRegWindowClose } from "react-icons/fa";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(() => { });
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold">
            <span className="text-red-400">Ch</span>ef Corn<span className="text-red-400">er</span>
          </Link>
        </div>
        <div>
          <ul className='hidden lg:flex'>
            <div>
              <NavLink
                to='/'
                className={({ isActive }) => `${isActive ? 'text-red-600' : ''} font-bold px-2`}
              >
                Home
              </NavLink>
              <NavLink
                to='/blogs'
                className={({ isActive }) => `${isActive ? 'text-red-600' : ''} font-bold px-2`}
              >
                Blogs
              </NavLink>
              <NavLink
                to='/signup'
                className={({ isActive }) => `${isActive ? 'text-red-600' : ''} font-bold`}
              >
                Signup
              </NavLink>

            </div>
          </ul>

          {user ? (
            <div className='lg:flex hidden px-3'>
              <img className="w-9 h-9 mt-4 rounded-lg" src={user.photoURL} alt="" title={user.displayName} />
              <button className="btn-error btn mx-2" onClick={handleLogOut}>
                Log out
              </button>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) => `${isActive ? 'text-red-600' : ''} font-bold px-2`}
              >
                Login
              </NavLink>
            </>
          )}

          <div className='lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBars className='text-3xl'></FaBars>
            </button>
            {isMenuOpen && (
              <div className='absolute z-10 top-0 left-0 w-full'>
                <div className='p-5 bg-white border rounded shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-end justify-end'>
                      <button className='text-3xl' onClick={() => setIsMenuOpen(false)}><FaRegWindowClose /> </button>
                    </div>
                  </div>
                  <nav>
                    <ul className='space-y-4'>
                      <li>
                        <NavLink
                          to='/'
                          className={({ isActive }) => `${isActive ? 'text-red-600' : ''} font-bold px-2`}
                        >
                          Home
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to='/blogs'
                          className={({ isActive }) => `${isActive ? 'text-red-600' : ''} font-bold px-2`}
                        >
                          Blogs
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to='/signup'
                          className={({ isActive }) => `${isActive ? 'text-red-600' : ''} font-bold`}
                        >
                          Signup
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to='/login'
                          className={({ isActive }) => `${isActive ? 'text-red-600' : ''} font-bold`}
                        >
                          Login
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
