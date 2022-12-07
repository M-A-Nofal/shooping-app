import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Products from './pages/products/Products';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const Layout = () => {
  return (
    <div className='app' >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:cat",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      }
    ]
  }
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
