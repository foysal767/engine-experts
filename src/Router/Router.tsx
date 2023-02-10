import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main/Main"
import AddCampaign1 from "../Pages/AdminDeshboard1/AddCampaign/AddCampaign1"
import AddService1 from "../Pages/AdminDeshboard1/AddService/AddService1"
import AdminDeshboard1 from "../Pages/AdminDeshboard1/AdminDeshboard1"
import AllOrders1 from "../Pages/AdminDeshboard1/AllOrders/AllOrders1"
import AllService1 from "../Pages/AdminDeshboard1/AllService/AllService1"
import AllUsers1 from "../Pages/AdminDeshboard1/AllUsers/AllUsers1"
import SellerOrder from "../Pages/AdminDeshboard1/SellerOrders/SellerOrder"
// import SellerOrder from "../Pages/AdminDeshboard1/SellerOrder/SellerOrder";
import Booking from "../Pages/Booking/Booking"
import Payment from "../Pages/Booking/Payment"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import GoogleMaps from "../Pages/GoogleMaps/GoogleMaps"
import ContactForm from "../Pages/Home/ContactForm/ContactForm"
import ContactUs from "../Pages/Home/ContactUs/ContactUs"
import Person1 from "../Pages/Home/Home/EnginrExperties/Person1"
import Home from "../Pages/Home/Home/Home"
import Login from "../Pages/Login/Login"
import MyReview from "../Pages/MyReview/MyReview"
import Organizer from "../Pages/Organizer/Organizer"
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails"
import Services from "../Pages/Services/Services"
import ServicesAll from "../Pages/ServicesAll/ServicesAll"
import SignUp from "../Pages/SignUp/SignUp"
import PrivateRouter from "./PrivateRouter/PrivateRouter"

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
        path: "/maps",
        element: <GoogleMaps></GoogleMaps>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/organizer",
        element: <Organizer></Organizer>,
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
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/servicesAll",
        element: <ServicesAll></ServicesAll>
      },
      {
        path: "/serviceDetails/:id",
        element: <PrivateRouter><ServiceDetails></ServiceDetails></PrivateRouter>,
      },
      {
        path: "/booking/payment/:id",
        element: <Payment></Payment>,
      },
      {
        path: "/person1",
        element: <Person1></Person1>,
      },
    ],
  },
  {
    path: "/dashboard1",
    element: <PrivateRouter><AdminDeshboard1></AdminDeshboard1></PrivateRouter>,
    children: [
      {
        path: "/dashboard1/addservice1",
        element: <AddService1></AddService1>,
      },
      {
        path: "/dashboard1/allservice1",
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
      {
        path: "/dashboard1/sellerOrders",
        element: <SellerOrder></SellerOrder>,
      },
      {
        path: "/dashboard1/booking",
        element: <Booking></Booking>,
      },
      {
        path: "/dashboard1/myreview",
        element: (
            <MyReview></MyReview>
        ),
      },
    ],
  },
])

export default router
