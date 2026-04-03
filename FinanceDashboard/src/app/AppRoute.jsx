import  { createBrowserRouter } from "react-router-dom";
import Register from "../features/auth/page/Register";
import Login from "../features/auth/page/Login";
import DashboardLayout from "../features/dashboard/Layout/DashboardLayout";
export const AppRoute = createBrowserRouter([
    {
path:"/",
element:<DashboardLayout/>
    },
{
    path:"/login",
    element:<Login/>
},
{
    path:"/register",
    element:<Register/>
},
])
