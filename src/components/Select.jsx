import { v4 as uuid } from 'uuid';

const Select = ({ label, value, onChange, options, classes }) => {
  return (
    <label className={'inline-block font-PopReg text-txt my-1 ' + (classes || '')}>
      { label }
      <select className={'bg-txt text-main w-full rounded-sm px-2 py-1 placeholder:font-RobReg'} onChange={onChange} value={value} >
        {
          options.map(option => (
            <option value={option} key={uuid()}>{option}</option>
          ))
        }
      </select>
    </label>
  );
}

export default Select;