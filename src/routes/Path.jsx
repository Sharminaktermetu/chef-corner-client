import { createBrowserRouter, } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Contact from "../components/Contact/Contact";
import Details from "../components/Details/Details";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{
      path: "/",
      element: <Home></Home>
    },

    {
      path: "/data/:id",
      element: <Details></Details>,
      loader:({params})=>fetch(`http://localhost:5000/data/${params.id}`)
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