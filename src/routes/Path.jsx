import { createBrowserRouter, } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Contact from "../components/Contact/Contact";
import Details from "../components/Details/Details";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{
      path: "/home",
      element: <Home></Home>
    },

    {
      path: "/contact",
      element: <Contact></Contact>
    },
    {
      path: "/data/:id",
      element: <Details></Details>,
      loader:({params})=>fetch(`http://localhost:5000/data/${params.id}`)
    },


    ]
  },

]);

export default router