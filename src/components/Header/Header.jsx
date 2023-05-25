import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to="/home">Chef Corner</Link>
  </div>
  <div className="flex-none gap-2">
   <Link to="/home">Home</Link>
   <Link to="/contact">Contact</Link>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.ibb.co/8sV2FTX/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;