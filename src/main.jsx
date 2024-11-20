import { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './output.css'
import './styles.css'
import Loading from './components/Loading'
import { AppCtxProvider } from './components/AppContext.jsx';
import About from './pages/About.jsx';
const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));
const EditCreate = lazy(() => import('./pages/EditCreate'));

/* las paginas son cargadas 'on demand', y contienen un componente que se renderiza mientras la pagina se carga */
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppCtxProvider><App/></AppCtxProvider>,
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
      },
      {
        path: '/about',
        element: <Suspense fallback={<Loading size={80} title={'Loading /About'}/>}>
          <About/>
        </Suspense>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
