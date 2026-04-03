import  { createBrowserRouter } from "react-router-dom";
import Register from "../features/auth/page/Register";
import Login from "../features/auth/page/Login";
export const AppRoute = createBrowserRouter([
    {
path:"/",
element:<h1>Home</h1>
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
