const LoginFormSwitcher = ({ mode, handleSetMode }) => {
  return (
    <a href='#' className='font-RobLgt text-lg text-txt hover:underline' onClick={handleSetMode}>
      {mode === 'login' ? 'signin' : 'login'}
    </a>
  );
}

export default LoginFormSwitcher;