import Dashboard from "../components/Dashboard";
import Editor from "../components/Editor";
import Layout from "../components/layout/layout";
import Admin from "../pages/admin";
import Home from "../pages/landing";
import Login from "../pages/login";
import Register from "../pages/register";
import ProtectedRoute from "./protectedRoutes";

export const AppRoutes = [
    {
        path : "/",
        element : <Layout/>,
        children : [{
            path : "/",
            element  : <Home/>
        }]
    },

    {
        path : "/login",
        element : <Login/>,
    },

    {
        path : "/register",
        element : <Register/>,
    },

    //all protected routes here
    {
        element : <ProtectedRoute/>,
        children : [{
            path : "/admin",
            element : <Admin/>,
            children : [{
                path : "editor",
                element : <Editor/>
            },{
                path : "dashboard",
                element : <Dashboard/>
            }]
        }]
    }
]