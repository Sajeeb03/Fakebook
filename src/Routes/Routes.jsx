import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Layouts/Root";
import User from "../Pages/Layouts/User";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />
    },
    {
        path: "/user/",
        element: <User />,
        children: [
            {
                path: "/user/register",
                element: <Register />
            },
            {
                path: "/user/login",
                element: <Login />
            }
        ]
    }
]);

export default router;