import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main/Main"
import AddCampaign1 from "../Pages/AdminDeshboard1/AddCampaign/AddCampaign1"
import AddService1 from "../Pages/AdminDeshboard1/AddService/AddService1"
import AdminDeshboard1 from "../Pages/AdminDeshboard1/AdminDeshboard1"
import AllOrders1 from "../Pages/AdminDeshboard1/AllOrders/AllOrders1"
import AllService1 from "../Pages/AdminDeshboard1/AllService/AllService1"
import AllUsers1 from "../Pages/AdminDeshboard1/AllUsers/AllUsers1"
import CompleltedOrders from "../Pages/AdminDeshboard1/CompletedOrders/CompleltedOrders"
import OrderDetails from "../Pages/AdminDeshboard1/SellerOrders/OrderDetails/OrderDetails"
import SellerOrder from "../Pages/AdminDeshboard1/SellerOrders/SellerOrder"
import Blog from "../Pages/Blog/Blog"
import EngineServiceBlog from "../Pages/Blog/LatestBlog/EngineServiceBlog"
import PaintingBlog from "../Pages/Blog/LatestBlog/PaintingBlog"
import Tyre from "../Pages/Blog/LatestBlog/Tyre"
// import SellerOrder from "../Pages/AdminDeshboard1/SellerOrder/SellerOrder";
import Booking from "../Pages/Booking/Booking"
import Payment from "../Pages/Booking/Payment"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import GoogleMaps from "../Pages/GoogleMaps/GoogleMaps"
import ContactForm from "../Pages/Home/ContactForm/ContactForm"
import AirExpertise from "../Pages/Home/Home/EnginrExperties/AirExpertise"
import ElectricCar from "../Pages/Home/Home/EnginrExperties/ElectricCar"
import EngineCluster from "../Pages/Home/Home/EnginrExperties/EngineCluster"
import EngineExperties from "../Pages/Home/Home/EnginrExperties/EngineExperties"
import Home from "../Pages/Home/Home/Home"
import PopularService from "../Pages/Home/Home/PopularService/PopularService"
import WorkingEnvironment from "../Pages/Home/WorkingEnvironment/WorkingEnvironment"
import Login from "../Pages/Login/Login"
import MyReview from "../Pages/MyReview/MyReview"
import Organizer from "../Pages/Organizer/Organizer"
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails"
import Services from "../Pages/Services/Services"
import ServicesAll from "../Pages/ServicesAll/ServicesAll"
import SignUp from "../Pages/SignUp/SignUp"
import Performance from "./../Pages/Blog/LatestBlog/Performance"
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
        path: "/blog",
        element: <Blog></Blog>,
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
        path: "/contactform",
        element: <ContactForm></ContactForm>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/servicesAll",
        element: <ServicesAll></ServicesAll>,
      },
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRouter>
            <ServiceDetails></ServiceDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/booking/payment/:id",
        element: <Payment></Payment>,
      },
      {
        path: "/popularservice",
        element: <PopularService></PopularService>,
      },
      {
        path: "/workingenvironment",
        element: <WorkingEnvironment></WorkingEnvironment>,
      },
      {
        path: "/engineexperties",
        element: <EngineExperties></EngineExperties>,
      },
      {
        path: "/airexpertise",
        element: <AirExpertise></AirExpertise>,
      },
      {
        path: "/enginecluster",
        element: <EngineCluster></EngineCluster>,
      },
      {
        path: "/electriccar",
        element: <ElectricCar></ElectricCar>,
      },
      {
        path: "/performance",
        element: <Performance></Performance>,
      },
      {
        path: "/paintingblog",
        element: <PaintingBlog></PaintingBlog>,
      },
      {
        path: "/tyre",
        element: <Tyre></Tyre>,
      },
      {
        path: "/engineserviceblog",
        element: <EngineServiceBlog></EngineServiceBlog>,
      },
    ],
  },
  {
    path: "/dashboard1",
    element: (
      <PrivateRouter>
        <AdminDeshboard1></AdminDeshboard1>
      </PrivateRouter>
    ),
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
        path: "/dashboard1/orderdetails",
        element: <OrderDetails></OrderDetails>,
      },
      {
        path: "/dashboard1/completedOrders",
        element: <CompleltedOrders></CompleltedOrders>,
      },
      {
        path: "/dashboard1/booking",
        element: <Booking></Booking>,
      },
      {
        path: "/dashboard1/myreview",
        element: <MyReview></MyReview>,
      },
    ],
  },
])

export default router
