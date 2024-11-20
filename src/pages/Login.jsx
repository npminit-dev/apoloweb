import { useContext, useEffect, useState } from 'react';
import useUsers from '../hooks/useUsers';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import RickLogo from '../components/RickLogo';
import CharacterPhrase from '../components/CharacterPhrase';
import { appCtx } from '../components/AppContext';

const Login = () => {
  const { setLogged } = useContext(appCtx)
  const { addUser, setDefaultUser, userExists, checkCredentials } = useUsers()
  const navigate = useNavigate()
  
  const [mode, setMode] = useState('login')
  const [user, setUser] = useState({ name: '', password: '' })
  const [validCredentials, setValidCredentials] = useState(true)

  useEffect(() => {
    setDefaultUser()
  }, [])

  const handleSetMode = () => {
    mode === 'login' ? setMode('signin') : setMode('login')
    setUser({ name: '', password: '' })
    setValidCredentials(true)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (checkCredentials(user)) {
      localStorage.setItem('userLogged', JSON.stringify(user))
      setLogged(true)
      navigate('/home')
      setMode('signin')
    } else setValidCredentials(false)
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    if (!userExists(user)) {
      addUser(user)
      handleSetMode()
    }
  }

  return (
    <div className='relative h-[100vh] w-[100vw] flex flex-col md:flex-row items-center justify-center overflow-hidden'>
      <div className='w-[250px] flex flex-col items-center justify-center fadeinleft md:mr-20 mb-5'>
        <RickLogo height={150} width={150}/>
        <CharacterPhrase author={'Rick'} maxW={350}>
          {
            mode === 'login' 
              ? <>Login is easy, Morty. Just don’t mess it up!</>
              : <>Signing up, huh? Morty, just type your info and don’t screw it up, simple!</>
          }
        </CharacterPhrase>
      </div>
      <LoginForm
        mode={mode}
        handleSubmit={mode === 'login' ? handleLogin : handleSignIn} 
        user={user}
        setUser={setUser}
        validCredentials={validCredentials}
        handleSetMode={handleSetMode}
        userExists={userExists}
      />
      <p className='absolute right-1 top-0 font-RobLgt dark:text-txt/50 text-txt-light/50'>username: 'flor', password: '1234'</p>
    </div>
  );
}

export default Login;