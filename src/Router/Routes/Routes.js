
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";

import Login from "../../Pages/Login/Login";


import Home from './../../Pages/Home/Home/Home';
import SignUp from './../../Pages/SignUP/SignUP';

import ServicesAll from './../../Pages/ServiceAll/ServiceAll';
import ServiceDetailSingle from './../../Pages/ServiceAll/ServiceDetailSingle';
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import Review from './../../Pages/Review/Review';
import ReviewForm from './../../Pages/Review/ReviewForm';

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
          path: '/serviceAll',
          element: <ServicesAll></ServicesAll>
        },
        {
          path: '/services/:id',
          element: <ServiceDetailSingle></ServiceDetailSingle>,
          loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/review',
          element: <PrivateRoute><Review></Review></PrivateRoute>
        },
        {
          path: '/review/:id',
          element: <PrivateRoute><ReviewForm></ReviewForm></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
        },
      ]
    }
  ]);

  export default router;