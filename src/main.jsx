import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home'
import EditCreate from './pages/EditCreate'
import './output.css'
import './styles.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/editcreate',
        element: <EditCreate/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
