import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Head from './Head';
import Home from './Home';
import Form from './Form';
import Shop from './Shop';
import Up from './Up';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/head",
        element: <Head></Head>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/form",
        element: <Form></Form>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/up",
        element: <Up></Up>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)




