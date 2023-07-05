import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './routes/Home/Home.jsx'
import AddNewTask from './routes/AddNewTask/AddNewTask.jsx'
import TaskDetails from './routes/TaskDetails/TaskDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/:id',
            element: <TaskDetails />
          }
        ]
      }, 
      {
        path: '/addnewtask',
        element: <AddNewTask/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
