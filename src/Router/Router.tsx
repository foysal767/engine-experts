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
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
    ],
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
        path: "/dashboard/allorders",
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
]);

export default router;
