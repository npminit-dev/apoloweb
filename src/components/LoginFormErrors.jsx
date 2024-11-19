const LoginFormErrors = ({ mode, user, validCredentials, userExists }) => {
  return (
    <div className='h-[35px]'>
      {mode === 'signin' && userExists(user) && <p className='font-RobLgt text-red-500 fadeinup'>Username already exists</p>}
      {mode === 'login' && !validCredentials && <p className='font-RobLgt text-red-500 fadeinup'>Wrong credentials</p>}
    </div>
  );
}

export default LoginFormErrors;