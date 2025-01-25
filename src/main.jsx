import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Root from './components/Root/Root'
import Home from './components/Home/Home'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Jobs from './components/Jobs/Jobs'
import JobDetails from './components/JobDetails/JobDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/jobs",
        element: <Jobs />
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
