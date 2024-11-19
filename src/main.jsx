import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './output.css'
import './styles.css'
import Loading from './components/Loading'
import { AppCtxProvider } from './components/AppContext.jsx';
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
        element: <Suspense fallback={<Loading size={80} title={'Loading /Login'}/>}>
          <Login/>
        </Suspense>
      },
      {
        path: '/home',
        element: <Suspense fallback={<Loading size={80} title={'Loading /Home'}/>}>
          <Home/>
        </Suspense>,
        
      },
      {
        path: '/editcreate',
        element: <Suspense fallback={<Loading size={80} title={'Loading /EditCreate'}/>}>
          <EditCreate/>
        </Suspense>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <AppCtxProvider>
    <RouterProvider router={router}/>
  </AppCtxProvider>
)
