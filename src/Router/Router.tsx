import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import AllServices from "../Pages/AllServices/AllServices";
import ContactUs from "../Pages/Home/ContactUs/ContactUs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";

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
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>
            }
        ]
    }
]);

export default router;