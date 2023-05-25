import {createBrowserRouter,} from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Contact from "../components/Contact/Contact";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[{
        path:"/home",
        element:<Home></Home>
      },
         
       { path:"/contact",
        element:<Contact></Contact>
        }
    ]
    },

  ]);
  
  export default router