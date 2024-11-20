const Input = ({ label, value, onChange, inputprops, classes }) => {
  return (
    <label className={'inline-block font-PopReg dark:text-txt text-txt-light sm:mt-[2px]' + (classes || '')}>
      { label || '' }
      <input 
        value={value} 
        onChange={onChange} 
        className={`dark:bg-txt bg-sec-light text-main w-full outline outline-[1px] outline-txt-light/30 
          dark:outline-none rounded-sm px-2 py-1 focus:outline-none placeholder:font-RobReg focus:shadow-lgt dark:focus:shadow-dark`} 
        {...inputprops}
      />
    </label>
  );
}
 
export default Input;