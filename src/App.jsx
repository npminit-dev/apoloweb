import { Outlet } from 'react-router-dom'
import { useContext } from 'react';
import Navigation from './components/Navigation';
import { appCtx } from './components/AppContext';
import ThemeSwitch from './components/ThemeSwitch';
import Singularity from './components/Singularity';

function App() {
  
  const { logged } = useContext(appCtx)

  return (
    <div className='relative dark:bg-main bg-main-light h-[100vh] w-[100vw] overflow-hidden'>
      {/* al ingresar en la pagina: si esta logeado el usuario, se carga la navegacion, sino solo el themeSwitcher */}
      { logged ?  
        <Navigation/> : 
        <div className='absolute top-2 left-2 z-50'>
          <ThemeSwitch/>
        </div>
      }
      <main>
        <Singularity/>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
