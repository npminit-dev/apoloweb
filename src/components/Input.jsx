const Input = ({ label, value, onChange, inputprops, classes }) => {
  return (
    <label className={'inline-block font-PopReg dark:text-txt text-txt-light sm:my-1 ' + (classes || '')}>
      { label || '' }
      <input 
        value={value} 
        onChange={onChange} 
        className={'dark:bg-txt bg-sec-light text-main w-full rounded-sm px-2 py-1 placeholder:font-RobReg'} 
        {...inputprops}
      />
    </label>
  );
}
 
export default Input;