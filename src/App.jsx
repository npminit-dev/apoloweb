import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function App() {
  
  const navigate = useNavigate()

  useEffect(() => {
    const logged = localStorage.getItem('userLogged')
    if(!logged) navigate('/login')
    else navigate('/home') 
  }, []);

  return (
    <div className='bg-main min-h-[100vh] min-w-[100vw]'>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
