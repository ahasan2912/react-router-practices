import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import HomeContant from './Components/HomeContant/HomeContant.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Comments from './Components/Comments/Comments.jsx';
import CommentDetails from './Components/CommentDetails/CommentDetails.jsx';
import ErrorHandle from './Components/ErrorHandle/ErrorHandle.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorHandle></ErrorHandle>,
    children: [
      {
        path: '/',
        element: <HomeContant></HomeContant>
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/comments',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/comments'),
        element: <Comments></Comments>
      },
      {
        path: '/comment/:commentId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
        element: <CommentDetails></CommentDetails>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
