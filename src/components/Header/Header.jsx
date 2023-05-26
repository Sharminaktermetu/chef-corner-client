import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold">
            <span className="text-red-400">Ch</span>ef Corn<span className="text-red-400">er</span>
          </Link>
        </div>
        <div className="flex-2 gap-2">
        <NavLink
              to='/'
              className= {({ isActive }) => `${isActive ? 'text-red-600' : ''} font-bold`}
            >
              Home
            </NavLink>
            <NavLink
              to='/signup'
              className= {({ isActive }) => `${isActive ? 'text-red-600' : ''} font-bold`}
            >
              Signup
            </NavLink>
            <NavLink
              to='/login'
              className= {({ isActive }) => `${isActive ? 'text-red-600' : ''} font-bold`}
            >
              Login
            </NavLink>

          {user && (
            <>
              <img className="w-9 h-9" src={user.photoURL} alt="" title={user.displayName} />
              <button className="btn-error btn" onClick={handleLogOut}>
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
