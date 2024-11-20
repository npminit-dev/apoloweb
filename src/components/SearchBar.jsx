import Input from './Input';

const SearchBar = ({ search, setSearch }) => {

  return ( 
    <search className='px-2 pb-1 sm:pb-2 w-full flex items-center justify-center sticky top-[44px] z-50'>
      <Input
        value={search}
        onChange={({target}) => setSearch(target.value)}
        classes={'inline-block w-full placeholder:text-txt'}
        inputprops={{placeholder: 'Morty $species:humanoid $status:dead $origin:citadel'}}
      />
    </search>
  );
}
 
export default SearchBar;