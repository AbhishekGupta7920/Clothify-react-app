import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Pages/Home'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Kids from './Pages/Kids'
import Login from './Pages/Login'
import Cart from './Pages/Cart'
import Footer from './components/Footer'
import SingleProduct from './components/SingleProduct'
import Electronics from './Pages/Electronics'
import Jewellery from './Pages/Jewellery'
import Wishlist from './Pages/Wishlist'
import LoginSignUpForm from './Pages/LoginSignUpForm'
import SearchResultProducts from './Pages/SearchResultProducts'
import Notifications from './Pages/Notifications'
import FAQ from './Pages/FAQ'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Home/><Footer/></>
  },
  {
    path: "/mens",
    element: <><Navbar/><Mens/><Footer/></>
  },
  {
    path: "/womens",
    element: <><Navbar/><Womens/><Footer/></>
  },
  {
    path: "/jewellery",
    element: <><Navbar/><Jewellery/><Footer/></>
  },
  {
    path: "/electronic",
    element: <><Navbar/><Electronics/><Footer/></>
  },
  {
    path: "/login",
    element: <><Navbar/><LoginSignUpForm/><Footer/></>
  },
  {
    path: "/cart",
    element: <><Navbar/><Cart/><Footer/></>
  },
  {
    path: "/wishlist",
    element: <><Navbar/><Wishlist/><Footer/></>
  },
  {
    path: "/products/:productId",
    element: <><Navbar/><SingleProduct/><Footer/></>
  },
  {
    path:"/searchResultsProducs",
    element: <><Navbar/><SearchResultProducts/><Footer/></>
  },
  {
    path:"/notifications",
    element: <><Navbar/><Notifications/><Footer/></>
  },
  {
    path:"/faqs",
    element: <><Navbar/><FAQ/><Footer/></>
  }
])

const App = () => {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
