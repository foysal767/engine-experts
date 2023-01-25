import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import AddCampaign from "../Pages/AdminDashboard/AddCampaign/AddCampaign";
import AddService from "../Pages/AdminDashboard/AddService/AddService";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
import AllOrders from "../Pages/AdminDashboard/AllOrders/AllOrders";
import AllService from "../Pages/AdminDashboard/AllService/AllService";
import AllUsers from "../Pages/AdminDashboard/AllUsers/AllUsers";
import ContactUs from "../Pages/Home/ContactUs/ContactUs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";

import AboutUs from "../Pages/Home/Home/AboutUs/AboutUs";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";


import AuthRoute from "../Context/AuthRoute/AuthRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Appointment from "../Pages/Appointment/Appointment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Appointment from "../Pages/Appointment/Appointment";
import AdminDeshboard1 from "../Pages/AdminDeshboard1/AdminDeshboard1";
import Booking from "../Pages/Booking/Booking";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/booking",
        element: <Booking></Booking>
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {

        path: 'serviceDetails',
        element: <ServiceDetails></ServiceDetails>
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: "/dashboard/addservice",
        element: <AddService></AddService>,

        path: "/serviceDetails",

        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/dashboard",
        element: <AdminDashboard></AdminDashboard>,
        children: [
          {
            path: "/dashboard/addservice",
            element: <AddService></AddService>,
          },
          {
            path: "/dashboard",
            element: <AllOrders></AllOrders>,
          },
          {
            path: "/dashboard/addcampaign",
            element: <AddCampaign></AddCampaign>,
          },
          {
            path: "/dashboard/alluser",
            element: <AllUsers></AllUsers>,
          },
          {
            path: "/dashboard/allservice",
            element: <AllService></AllService>,
          },
        ],
      },
    ],
  },
  {
    path: '/dashboard1',
    element:<AdminDeshboard1></AdminDeshboard1>
  }
]);


export default router;
