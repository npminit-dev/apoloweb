const Button = ({ children, buttonProps, action, classes }) => {
  return (
    <button 
      className={`block font-PopSB px-8 py-2 mt-8 mb-2 text-white bg-emph rounded-sm hover:bg-main duration-200 disabled:bg-sec disabled:text-main ${classes || ''}`} 
      type='submit'
      onClick={action}
      {...buttonProps}
    >
      { children }
    </button>
  );
}
 
export default Button;