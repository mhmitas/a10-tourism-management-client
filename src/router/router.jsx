import { createBrowserRouter } from "react-router-dom";
import Root from '../../src/routes/Root'
import Home from "../pages/home/Home";
import AddTouristsSpot from "../pages/addTouristSpot/AddTouristsSpot";

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
        ]
    },
]);
