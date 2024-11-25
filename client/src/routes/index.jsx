import AttemptQuiz from "../components/AttemptQuiz";
import QuizSubmitted from "../components/AttemptQuiz/quizSubmitted";
import Dashboard from "../components/Dashboard";
import Content from "../components/Dashboard/content"
import QuizManager from "../components/Dashboard/QuizManager";
import QuizResponses from "../components/Dashboard/quizResponses";
import Editor from "../components/Editor";
import Layout from "../components/layout/layout";
import Admin from "../pages/admin";
import Home from "../pages/landing";
import Login from "../pages/login";
import Register from "../pages/register";
import VerifyUser from "../pages/verifyUser";
import ProtectedRoute from "./protectedRoutes";

export const AppRoutes = [
    {
        path: "/",
        element: <Layout />,
        children: [{
            path: "/",
            element: <Home />
        }]
    },
    {
        path : "/verified/:status",
        element : <VerifyUser/>
    },

    {
        path: "/login",
        element: <Login />,
    },

    {
        path: "/register",
        element: <Register />,
    },

    //all protected routes here
    {
        element: <ProtectedRoute />,
        children: [{
            path: "/admin",
            element: <Admin />,
            children: [{
                path: "editor/:workspaceId/:quizId",
                element: <Editor />
            }, {
                path: "dashboard/",
                element: <Dashboard><Content/></Dashboard>,
            }, {
                path: "dashboard/:quizId",
                element: <Dashboard><QuizResponses/></Dashboard>,
            }, {
                path: "/admin/dashboard/create/:workspaceId",
                element: <QuizManager />
            }]
        }, , {
            path: "attempt/:quizId",
            element: <AttemptQuiz />
        }, {
            path : "submit/success/:quizId/:responseId",
            element : <QuizSubmitted/>
        }]
    }
]