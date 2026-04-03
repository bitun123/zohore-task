import { createBrowserRouter, Navigate } from "react-router-dom";
import Register from "../features/auth/page/Register";
import Login from "../features/auth/page/Login";
import DashboardLayout from "../features/dashboard/Layout/DashboardLayout";
import Dashboard from "../features/dashboard/page/Dashboard";
import Transactions from "../features/dashboard/page/Transactions";
import Insights from "../features/dashboard/page/Insights";
export const AppRoute = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/dashboard" replace />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/transactions",
                element: <Transactions />
            },
            {
                path: "/insights",
                element: <Insights />
            }
        ]

    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
])
