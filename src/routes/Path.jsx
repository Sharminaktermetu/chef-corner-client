import { createBrowserRouter, } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Details from "../components/Details/Details";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Error from "../components/ErrorPage/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [{
      path: "/",
      element: <Home></Home>
    },

    {
      path: "/data/:id",
      element:<PrivateRoute> <Details></Details></PrivateRoute>,
      loader:({params})=>fetch(`https://server-chef-adsmarketersaif13-gmailcom.vercel.app/data/\
      ${params.id}`)
    },
    {
      path: "/login",
      element: <Login></Login>,
     
    },
    {
      path: "/signup",
      element: <Signup></Signup>,
     
    },


    ]
  },

]);

export default router