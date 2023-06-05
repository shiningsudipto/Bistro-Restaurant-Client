import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
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
import AdminHome from "../Dashboard/Admin/AdminHome";
import AdminRoute from "./AdminRoute";


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
            }
        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'mycart',
                element: <PrivateRoute><MyCart /></PrivateRoute>
            },
            {
                path: 'userhome',
                element: <PrivateRoute><UserHome /></PrivateRoute>
            },
            {
                path: 'payment',
                element: <PrivateRoute> <Payment /></PrivateRoute>
            },
            {
                path: 'reservation',
                element: <PrivateRoute> <Reservation /></PrivateRoute>
            },
            {
                path: 'history',
                element: <PrivateRoute> <History /></PrivateRoute>
            },
            {
                path: 'review',
                element: <PrivateRoute><Review /></PrivateRoute>
            },
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path: 'additems',
                element: <AdminRoute><AddItems /></AdminRoute>
            },
            {
                path: 'manageitems',
                element: <AdminRoute> <ManageItems /></AdminRoute>
            },
            {
                path: 'booking',
                element: <AdminRoute><Booking /></AdminRoute>
            },
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers /></AdminRoute>
            }
        ]
    }
]);