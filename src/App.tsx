import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
// Page imports
// import Auth from './Pages/Auth';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Auth from './Pages/Auth';

// Layout imports 
import Header from './Components/Header';
import Footer from './Components/Footer';
const Layout = () => {
  return (
    <>
    <Header />
  <Outlet />
    <Footer />
    </>
  )
}




function App() {
 const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children : [
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/cart",
        element:<Cart />
      },
      {
        path:"/product/[:id]",
        element:<Product />
      } ,     {
        path:"/shop",
        element:<Shop />
      },
      {
        path:"/cart/[:user]",
        element:<Cart />
      }
    ]
  },{
    path:"/account/*",
    element:<Auth />
  }
 ])

  return <RouterProvider router={router}/>
}

export default App
