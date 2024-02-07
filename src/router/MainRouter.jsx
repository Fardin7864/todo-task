import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../pages/Error/Error";
import Dashboard from "../pages/Dashboard/Dashboard";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path:'/',
                element: <Dashboard/>
            }
        ]
    }
])