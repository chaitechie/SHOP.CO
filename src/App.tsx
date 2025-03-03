import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// Page imports
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

// Layout imports
import Header from "./Components/Header";
import Footer from "./Components/Footer";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/cart/:user",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/SignIn",
      element: <Login />,
    },
    {
      path: "/SignUp",
      element: <SignUp />,
    }

  ]);

  return <RouterProvider router={router} />;
}

export default App;
