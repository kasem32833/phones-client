import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './components/main';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "phones",
        element: <Phones />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
