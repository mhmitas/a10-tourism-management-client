import { createBrowserRouter } from "react-router-dom";
import Root from '../../src/routes/Root'
import Home from "../pages/home/Home";
import AddTouristsSpot from "../pages/addTouristSpot/AddTouristsSpot";
import UsersSpotsList from "../pages/UsersList/UsersSpotsList";
import SignIn from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";

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
                element: <AddTouristsSpot></AddTouristsSpot>
            },
            {
                path: "/users-spots-list",
                element: <UsersSpotsList></UsersSpotsList>
            },
            {
                path: "/sign-in",
                element: <SignIn></SignIn>
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>
            },
        ]
    },
]);
