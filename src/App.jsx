import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import { appCtx } from './components/AppContext';
import ThemeSwitch from './components/ThemeSwitch';

function App() {
  
  const navigate = useNavigate()
  const { setLogged, logged } = useContext(appCtx)

  useEffect(() => {
    const loginfo = localStorage.getItem('userLogged')
    if(!loginfo) {
      navigate('/login')
      setLogged(false)
    }
    else {
      navigate('/home')
      setLogged(true)
    }
  }, []);

  return (
    <div className='relative dark:bg-main bg-main-light h-[100vh] w-[100vw]'>
      { logged ?  
        <Navigation/> : 
        <div className='absolute top-2 left-2'>
          <ThemeSwitch/>
        </div>  
      }
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
