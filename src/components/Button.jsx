const Button = ({ children, buttonProps, action, classes }) => {
  return (
    <button 
      className={`block font-PopSB px-8 py-2 mt-8 mb-2 text-txt_emph hover:text-txt-light dark:hover:text-txt dark:bg-emph bg-emph-light rounded-sm dark:hover:bg-main hover:bg-main-light duration-200 
        dark:disabled:bg-sec disabled:bg-sec-light dark:disabled:text-main disabled:text-main-light  disabled:outline disabled:outline-2 dark:disabled:outline-main disabled:outline-main-light ${classes || ''}`} 
      type='submit'
      onClick={action}
      {...buttonProps}
    >
      { children }
    </button>
  );
}
 
export default Button;