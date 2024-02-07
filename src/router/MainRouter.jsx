import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../pages/Error/Error";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddToDo from "../pages/AddToDo/AddToDo";
import Edit from "../pages/Edit/Edit";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path:'/',
                element: <Dashboard/>
            },
            {
                path: '/add-todo',
                element: <AddToDo/>
            },
            {
                path: '/edit/:id',
                element:<Edit/>
            }
        ]
    }
])