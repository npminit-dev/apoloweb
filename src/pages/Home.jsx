import { useContext, useState } from 'react';
import Character from '../components/Character';
import SearchBar from '../components/SearchBar';
import { appCtx } from '../components/AppContext';
import Loading from '../components/Loading';
import useVerticalScroll from '../hooks/useVerticalScroll';
import GoToTop from '../components/GoToTop';
import EmptyListPlaceholder from '../components/EmptyListPlaceholder';
import { nameExtractRegexp, propRegexp } from '../constants';

const Home = () => {

  const { characters, localCharacters, loadState, deleteCharacter } = useContext(appCtx);
  const [search, setSearch] = useState('')
  const { hasVerticalScroll, ref } = useVerticalScroll()

  const finalCharacters = localCharacters.concat(characters).filter((char) => filter(char, search));

  return (
    <section className='relative'>
      <SearchBar search={search} setSearch={setSearch} />
      {
        loadState === 'idle' ?
          <ul className='overflow-scroll h-[calc(100vh-80px)] sm:h-[calc(100vh-92px)]'>
            {
              finalCharacters.length === 0 ? (
                <EmptyListPlaceholder
                  iconsize={100}
                  message={'Empty list, huh? Must’ve broken the multiverse again!'}
                />
              ) : (
                finalCharacters.map((char) => (
                  <Character
                    key={char.id}
                    id={char.id}
                    name={char.name}
                    gender={char.gender}
                    image={char.image}
                    origin={char.origin.name || char.origin}
                    species={char.species}
                    status={char.status}
                    local={char.local}
                    deleteCharacter={deleteCharacter}
                  />
                ))
              )
            }
          </ul> :
          <Loading title={'Loading characters'} size={50} />
      }
      <GoToTop visible={hasVerticalScroll} action={() => ref.current.scrollTo({ top: 0, behavior: 'smooth' })} />
    </section>
  );
}

/* filtro avanzado */
export const filter = (char, search = '') => {
  const filters = search.trim().split(/[\s,]+/);
  let genderFilter = null;
  let statusFilter = null;
  let originFilter = null;
  let speciesFilter = null;
  let nameFilter = null;

  filters.forEach(filter => {
    const propMatch = filter.match(propRegexp('gender')) ||
      filter.match(propRegexp('status')) ||
      filter.match(propRegexp('origin')) ||
      filter.match(propRegexp('species'));

    if (propMatch && propMatch.length > 0) {
      const [_, keyWithColon, value] = propMatch[0].match(/^(\$[a-z]+):(.+)$/i); 
      if (keyWithColon && value) {
        const key = keyWithColon.slice(1).toLowerCase(); 
        const trimmedValue = value.trim(); 
        if (key === 'gender') genderFilter = trimmedValue;
        else if (key === 'status') statusFilter = trimmedValue;
        else if (key === 'origin') originFilter = trimmedValue;
        else if (key === 'species') speciesFilter = trimmedValue;
      }
    } else {
      const nameMatch = filter.match(nameExtractRegexp);
      if (nameMatch) nameFilter = nameMatch[0].trim(); 
    }
  });

  if (genderFilter && !new RegExp(`^${genderFilter}`, 'i').test(char.gender)) return false;
  if (statusFilter && !new RegExp(`^${statusFilter}`, 'i').test(char.status)) return false;
  if (originFilter && !new RegExp(`^${originFilter}`, 'i').test((char.origin.name || char.origin).toLowerCase())) return false;
  if (speciesFilter && !new RegExp(`^${speciesFilter}`, 'i').test(char.species)) return false;
  if (nameFilter && !new RegExp(nameFilter, 'i').test(char.name)) return false;
  return true;
};

export default Home;