import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NotFound from "../Pages/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>
    }
])