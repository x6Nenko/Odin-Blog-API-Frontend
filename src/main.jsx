import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from '../src/routes/Root.jsx';
import Posts from '../src/routes/Posts.jsx'
import Post from '../src/routes/Post.jsx'
import ErrorPage from './error-page.jsx';
import Registration from '../src/routes/Registration.jsx';
import Login from '../src/routes/Login.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "posts/:postid",
        element: <Post />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
