
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";


import Home from './../../Pages/Home/Home/Home';
import SignUp from './../../Pages/SignUP/SignUP';


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/servicesAll',
          element: <Services></Services>
        }
      ]
    }
  ]);

  export default router;