const Input = ({ label, value, onChange, inputprops, classes }) => {
  return (
    <label className={'inline-block font-PopReg text-txt sm:my-1 ' + (classes || '')}>
      { label || '' }
      <input 
        value={value} 
        onChange={onChange} 
        className={'bg-txt text-main w-full rounded-sm px-2 py-1 placeholder:font-RobReg'} 
        {...inputprops}
      />
    </label>
  );
}
 
export default Input;