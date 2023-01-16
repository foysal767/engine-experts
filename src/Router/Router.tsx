import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import ContactUs from "../Pages/Home/ContactUs/ContactUs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
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
            }
        ]
    }
]);

export default router;