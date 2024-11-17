import { useRef } from 'react';
import Input from './Input';
import { CiSearch } from "react-icons/ci";


const SearchBar = ({ search, setSearch }) => {

  return ( 
    <search className='px-2 w-full flex items-center justify-center sticky top-[44px] z-50 bg-main'>
      <Input
        value={search}
        onChange={({target}) => setSearch(target.value)}
        classes={'inline-block w-full placeholder:text-txt'}
        inputprops={{placeholder: 'Search character by name...'}}
      />
    </search>
  );
}
 
export default SearchBar;