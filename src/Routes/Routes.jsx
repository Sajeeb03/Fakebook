import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home/Home";
import Root from "../Pages/Layouts/Root";
import User from "../Pages/Layouts/User";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Details from "../Pages/Media/Details";
import Media from "../Pages/Media/Media";
import Message from "../Pages/Message/Message";
import ErrorPage from "../Pages/Shared/Error/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/media",
                element: <Media />
            },
            {
                path: "/message",
                element: <Message />
            },
            {
                path: "/post/:id",
                element: <Details />
            }
        ]
    },
    {
        path: "/user/",
        element: <User />,
        errorElement: <ErrorPage />,
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