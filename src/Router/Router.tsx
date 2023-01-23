import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import AddCampaign from "../Pages/AdminDashboard/AddCampaign/AddCampaign";
import AddService from "../Pages/AdminDashboard/AddService/AddService";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
import AllOrders from "../Pages/AdminDashboard/AllOrders/AllOrders";
import AllService from "../Pages/AdminDashboard/AllService/AllService";
import AllUsers from "../Pages/AdminDashboard/AllUsers/AllUsers";
import AllServices from "../Pages/ServiceDetails/ServiceDetails";
import ContactUs from "../Pages/Home/ContactUs/ContactUs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
<<<<<<< HEAD
import AboutUs from "../Pages/Home/Home/AboutUs/AboutUs";
=======
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
>>>>>>> edf2e7afd2ac706058cebdc2696e147b83787138

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
        path: "/services",
        element: <Services></Services>,
      },
      {
<<<<<<< HEAD
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
=======
        path: "/serviceDetails",
        element: <ServiceDetails></ServiceDetails>,
>>>>>>> edf2e7afd2ac706058cebdc2696e147b83787138
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
]);

export default router;
