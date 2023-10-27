import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Gigs from "./pages/gigs/Gigs";
import MyGigs from "./pages/my-gigs/MyGigs";
import Gig from "./pages/single-gig/Gig";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import NewGigs from "./pages/new-gig/NewGig";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./redux/api/apiSlice.js";
import Orders from "./pages/orders/Orders";
import Profile from "./pages/profile/Profile";
import Cookies from "js-cookie";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";
import Payment from "./pages/payment/Payment";


function App() {
  
  const Layout = () => {
    return (
      <ApiProvider api={apiSlice}>
        <div className="app">
          <Navbar/>
          <Outlet/>
          <Footer/>
        </div>
      </ApiProvider>
    );
  }

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Layout/>,
      children : [
        {
          path : "/",
          element : <Home/>
        },
        {
          path : "/add-new-gig",
          element : <NewGigs/>
        },
        {
          path : "/my-gigs",
          element : <MyGigs/>
        },
        {
          path : "/message/:id",
          element : <Message/>
        },
        {
          path : "/messages",
          element : <Messages/>
        },
        {
          path : "/payment/:id",
          element : <Payment/>
        },
        {
          path : "/profile/:id",
          element : <Profile/>
        },
        {
          path : "/gigs",
          element : <Gigs/>
        },
        {
          path : "/gig/:id",
          element : <Gig/>
        },
        {
          path : "/orders",
          element : <Orders/>
        },
        {
          path : "*",
          element : <NotFoundPage/>
        }
      ]
    }
  ]);

  const routerTwo = createBrowserRouter([
    {
      path : "/",
      element : <Layout/>,
      children : [
        {
          path : "/login",
          element : <Login/>
        },
        {
          path : "/register",
          element : <Register/>
        },
        {
          path : "/",
          element : <Home/>
        },
        {
          path : "/gigs",
          element : <Gigs/>
        },
        {
          path : "/gig/:id",
          element : <Gig/>
        },
        {
          path : "*",
          element : <NotFoundPage/>
        }
      ]
    }
  ]);

  console.log(Cookies.get("authToken"));

  if(Cookies.get("authToken")){
    return (
      <>
        <RouterProvider router={router}/>
      </>
    );
  }else{
    return (
      <>
        <RouterProvider router={routerTwo}/>
      </>
    );
  }

}

export default App;
