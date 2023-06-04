import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Dashboard/MyCart";
import UserHome from "../Dashboard/UserHome";
import Reservation from "../Dashboard/Reservation";
import History from "../Dashboard/History";
import Review from "../Dashboard/Review";
import Booking from "../Dashboard/Booking";
import AllUsers from "../Dashboard/Admin/AllUsers";
import AddItems from "../Dashboard/Admin/AddItems";
import ManageItems from "../Dashboard/Admin/ManageItems";
import Payment from "../Dashboard/Payment/Payment";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'order/:category',
                element: <Order />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret /> </PrivateRoute>
            }
        ],
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'mycart',
                element: <MyCart />
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'userhome',
                element: <UserHome />
            },
            {
                path: 'reservation',
                element: <Reservation />
            },
            {
                path: 'history',
                element: <History />
            },
            {
                path: 'review',
                element: <Review />
            },
            {
                path: 'booking',
                element: <Booking />
            },
            {
                path: 'allusers',
                element: <AllUsers />
            },
            {
                path: 'additems',
                element: <AddItems />
            },
            {
                path: 'manageitems',
                element: <ManageItems />
            }
        ]
    }
]);