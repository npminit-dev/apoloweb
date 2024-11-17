import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { CharactersContextProvider } from './components/CharactersContext';

function App() {
  
  const navigate = useNavigate()

  useEffect(() => {
    const logged = localStorage.getItem('userLogged')
    if(!logged) navigate('/login')
    else navigate('/home') 
  }, []);

  return (
    <div className='bg-main min-h-[100vh] min-w-[100vw]'>
      <CharactersContextProvider>
        <div>
          <Outlet/>
        </div>
      </CharactersContextProvider>
    </div>
  )
}

export default App
