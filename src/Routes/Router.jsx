import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AllToys from "../Pages/AllToys/AllToys";
import AddAToys from "../Pages/AddAToys/AddAToys";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyToys from "../PrivateRoute/MyToys/MyToys";
import Details from "../Pages/Details/Details";

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
                loader: async () => await fetch("http://localhost:5000/addAToy")
            },
            {
                path: 'addAToy',
                element: <PrivateRoute><AddAToys></AddAToys></PrivateRoute>
            },
            {
                path: 'myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/addAToy/${params.id}`)
            }
        ]
    }
])