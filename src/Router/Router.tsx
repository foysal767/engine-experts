import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main/Main"
import AddCampaign1 from "../Pages/AdminDeshboard1/AddCampaign/AddCampaign1"
import AddService1 from "../Pages/AdminDeshboard1/AddService/AddService1"
import AdminDeshboard1 from "../Pages/AdminDeshboard1/AdminDeshboard1"
import AllOrders1 from "../Pages/AdminDeshboard1/AllOrders/AllOrders1"
import AllService1 from "../Pages/AdminDeshboard1/AllService/AllService1"
import AllUsers1 from "../Pages/AdminDeshboard1/AllUsers/AllUsers1"
import Appointment from "../Pages/Appointment/Appointment"
import Booking from "../Pages/Booking/Booking"
import Payment from "../Pages/Booking/Payment"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import ContactForm from "../Pages/Home/ContactForm/ContactForm"
import ContactUs from "../Pages/Home/ContactUs/ContactUs"
import Home from "../Pages/Home/Home/Home"
import Login from "../Pages/Login/Login"
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails"
import Services from "../Pages/Services/Services"
import SignUp from "../Pages/SignUp/SignUp"

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
        path: "/contactform",
        element: <ContactForm></ContactForm>,
      },
      {
        path: "/booking",
        element: <Booking></Booking>,
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
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/booking/payment",
        element: <Payment></Payment>
      }
    ],
  },
  {
    path: "/dashboard1",
    element: <AdminDeshboard1></AdminDeshboard1>,
    children: [
      {
        path: "/dashboard1/addservice1",
        element: <AddService1></AddService1>,
      },
      {
        path: "/dashboard1",
        element: <AllService1></AllService1>,
      },
      {
        path: "/dashboard1/allusers1",
        element: <AllUsers1></AllUsers1>,
      },
      {
        path: "/dashboard1/addcampaign1",
        element: <AddCampaign1></AddCampaign1>,
      },
      {
        path: "/dashboard1/allorders1",
        element: <AllOrders1></AllOrders1>,
      },
    ],
  },
])

export default router
