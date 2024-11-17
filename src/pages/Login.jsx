import { useEffect, useState } from 'react';
import RickLogo from '../components/RickAndMortyLogo';
import useUsers from '../components/useUsers';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {

  const [mode, setMode] = useState('login')
  const { addUser, setDefaultUser, userExists } = useUsers()
  const [user, setUser] = useState({ name: '', password: '' })
  const navigate = useNavigate()

  useEffect(() => {
    setDefaultUser()
  }, [])

  const handleSetMode = () => {
    mode === 'login' ? setMode('signin') : setMode('login')
    setUser({name: '', password: ''})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(mode === 'login') {
      if(userExists(user)) {
        localStorage.setItem('userLogged', JSON.stringify(user))
        navigate('/home')
        setMode('signin')
      }
    } else {
      if(!userExists(user)) {
        addUser(user)
        setMode('login')
      }
    } 
  }

  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
      <form onSubmit={(e) => handleSubmit(e)} className='w-80 px-4 py-8 bg-sec rounded-md flex flex-col items-center fadeinleft'>
        <div className='w-full flex items-center justify-center mb-4'>
          <RickLogo height={100} width={100} />
        </div>
        <h1 className='font-RobReg text-3xl text-txt'>
          { mode === 'signin' ? 'Sign in' : 'Create account' }
        </h1>
        <div>
          <Input
            label={'Username'}
            value={user.name}
            onChange={({target}) => setUser({...user, name:target.value})}
            inputprops={{ minLength: 1, maxLength: 30, required: true }}
          />
          <Input
            label={'Password'}
            value={user.password}
            onChange={({target}) => setUser({...user, password:target.value})}
            inputprops={{ minLength: 4, maxLength: 30, required: true }}
          />
        </div>
        <Button buttonProps={{ type: 'submit' }}>{mode}</Button>
        <a href='#' className='font-RobLgt text-lg text-txt hover:underline' onClick={handleSetMode}>{mode === 'login' ? 'signin' : 'login'}</a>
      </form>
    </div>
  );
}

export default Login;