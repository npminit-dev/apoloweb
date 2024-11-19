import Input from './Input';
import Button from './Button';
import LoginFormErrors from './LoginFormErrors';
import RickLogo from '../components/RickLogo'
import LoginFormSwitcher from '../components/LoginFormSwitcher';


const LoginForm = ({ mode, handleSubmit, user, setUser, validCredentials, handleSetMode, userExists }) => {

  const shouldBeDisabled = () => user.name.trim() === '' || user.password.trim() === ''

  return (
    <form onSubmit={handleSubmit} className='w-[300px] px-4 py-8 dark:bg-sec bg-main-light rounded-md flex flex-col items-center fadeinright dark:border-none border-[1px] border-txt-light/50'>
      <h1 className='font-RobReg text-3xl dark:text-txt text-txt-light my-4'>
        {mode === 'signin' ? 'Create account' : 'Log in'}
      </h1>
      <div>
        <Input
          label={'Username'}
          value={user.name}
          onChange={({ target }) => setUser({ ...user, name: target.value })}
          inputprops={{ minLength: 1, maxLength: 30, required: true, pattern: '^[a-zA-Z0-9._]+$' }}
        />
        <Input
          label={'Password'}
          value={user.password}
          onChange={({ target }) => setUser({ ...user, password: target.value })}
          inputprops={{ minLength: 4, maxLength: 30, required: true, type: 'password' }}
        />
      </div>
      <LoginFormErrors mode={mode} user={user} validCredentials={validCredentials} userExists={userExists}/>
      <Button buttonProps={{ type: 'submit', disabled: shouldBeDisabled() }}>{mode}</Button>
      <LoginFormSwitcher 
        handleSetMode={handleSetMode} 
        mode={mode}
      />
    </form>
  );
}

export default LoginForm;