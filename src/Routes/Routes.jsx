import {createBrowserRouter} from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../Layouts/Main";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
      ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;