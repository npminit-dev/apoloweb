import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './output.css'
import './styles.css'
const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));
const EditCreate = lazy(() => import('./pages/EditCreate'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/login',
        element: <Suspense>
          <Login/>
        </Suspense>
      },
      {
        path: '/home',
        element: <Suspense>
          <Home/>
        </Suspense>
      },
      {
        path: '/editcreate',
        element: <Suspense>
          <EditCreate/>
        </Suspense>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
