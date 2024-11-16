import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function App() {
  
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home')
  }, []);

  return (
    <main className="text-[50px]">
      <Outlet/>
    </main>
  )
}

export default App
