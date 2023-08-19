import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import JobDetails from './components/JobDetails/JobDetails';
import Layoutes from './components/Layoutes/Layoutes';
import CommonHeader from './components/CommonHeader/CommonHeader';
import ApliedJob from './components/ApliedJob/ApliedJob';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/Error/Error';
import Chart from './components/Chart/Chart';
import loderAplied from './components/LoderFunction/LoderFunction';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutes/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <App/>,
        loader: () => fetch('/feature.json'),
        errorElement: <ErrorPage/>
      },
      {
        path: '/details/:id',
        element: <JobDetails/>,
        loader: ({params}) => fetch("/feature.json"),
        errorElement: <ErrorPage/>
      },
      {
        path: '/applied',
        element: <ApliedJob></ApliedJob>,
        loader: loderAplied,
        errorElement: <ErrorPage/>
        
      },
      {
        path: '/blog',
        element: <Blog/>,
        errorElement: <ErrorPage/>
      },
      {
        path: 'chart',
        element: <Chart/>
      }
    ]
  },
  // {
  //   path: '/details',
  //   element: <JobDetails/>
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
