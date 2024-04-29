import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AddCraft from './Components/AddCraft/AddCraft';
import MyArt from './Components/MyArt/MyArt';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AllArt from './Components/AllArt/AllArt';
import AuthProvider from './Components/Providers/AuthProvider';
import PrivateRoute from './Components/Providers/PrivateRoute/PrivateRoute';
import HomeDetails from './Components/HomeDetails/HomeDetails';
import CraftDetails from './Components/CraftDetails/CraftDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5000/craft')
      },
      {
        path:"/addCraft",
        element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
      },
      {
        path:"/myArt",
        element:<PrivateRoute><MyArt></MyArt></PrivateRoute>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/allArt",
        element:<PrivateRoute><AllArt></AllArt></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/craft')
      },
      // {
      //   path:'/craft/:id',
      //   element:<HomeDetails></HomeDetails>
      // },
      {
        path:'/craft/:id',
        element: <PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
