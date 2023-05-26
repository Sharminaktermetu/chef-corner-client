import React, { useContext } from 'react';
import { AuthContext } from '../components/Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    if(loading){
        return(
            <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
          </div>
      );
    }
    if(user){
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;