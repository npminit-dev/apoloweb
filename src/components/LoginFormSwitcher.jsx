const LoginFormSwitcher = ({ mode, handleSetMode }) => {
  return (
    <a href='#' className='font-RobLgt text-lg dark:text-txt text-txt-light hover:underline' onClick={handleSetMode}>
      {mode === 'login' ? 'signin' : 'login'}
    </a>
  );
}

export default LoginFormSwitcher;