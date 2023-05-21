import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AllToys from "../Pages/AllToys/AllToys";
import AddAToys from "../Pages/AddAToys/AddAToys";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => await fetch("https://y-red-six.vercel.app/allToys")
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>,
                loader: async () => await fetch("https://y-red-six.vercel.app/allToys")
            },
            {
                path: 'addAToy',
                element: <AddAToys></AddAToys>
            }
        ]
    }
])