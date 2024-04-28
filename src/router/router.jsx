import { createBrowserRouter } from "react-router-dom";
import Root from '../../src/routes/Root'
import Home from "../pages/home/Home";
import AddTouristsSpot from "../pages/addTouristSpot/AddTouristsSpot";
import UsersSpotsList from "../pages/UsersList/UsersSpotsList";
import SignIn from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivetRoute from "../routes/privet/PrivetRoute";
import HelloPage from "../routes/privet/HelloPage";
import PrivetRoute2 from "../routes/privet/PrivetRoute2";
import AllTouristsSpot from "../pages/allTouristsSpot/AllTouristsSpot";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/add-tourists-spot",
                element: <PrivetRoute><AddTouristsSpot></AddTouristsSpot></PrivetRoute>
            },
            {
                path: "/all-tourist-spots",
                element: <AllTouristsSpot></AllTouristsSpot>
            },
            {
                path: "/users-spots-list",
                element: <PrivetRoute><UsersSpotsList></UsersSpotsList></PrivetRoute>
            },
            {
                path: "/sign-in",
                element: <SignIn></SignIn>
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>
            },
            {
                path: "/hello",
                element: <PrivetRoute2><HelloPage></HelloPage></PrivetRoute2>
            },
        ]
    },
]);
