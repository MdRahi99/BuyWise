import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../Layouts/Main";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import AllProducts from "../Components/AllProducts/AllProducts";
import ProductDetails from "../Components/AllProducts/ProductDetails";
import ProductsCart from "../Components/ProductsCart/ProductsCart";

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
        path: '/products',
        loader: async () => await fetch('http://localhost:5000/all-products'),
        element: <AllProducts></AllProducts>
      },
      {
        path: "/product-details/:_id",
        loader: async ({ params }) => await fetch(`http://localhost:5000/product-details/${params._id}`),
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/products-cart",
        element: <ProductsCart></ProductsCart>
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