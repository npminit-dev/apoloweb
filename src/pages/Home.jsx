import { useContext, useEffect, useRef, useState } from 'react';
import Character from '../components/Character';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import { appCtx } from '../components/AppContext';
import Loading from '../components/Loading';
import useVerticalScroll from '../hooks/useVerticalScroll';
import GoToTop from '../components/GoToTop';

const Home = () => {

  const { characters, localCharacters, loadState, reloadCharacters, deleteCharacter } = useContext(appCtx);
  const [search, setSearch] = useState('')
  const { hasVerticalScroll, ref } = useVerticalScroll()

  return (
    <section className='relative'>
      <SearchBar search={search} setSearch={setSearch} />
      <ul className='overflow-scroll h-[calc(100vh-80px)] sm:h-[calc(100vh-92px)]' ref={ref}>
        {
          loadState === 'idle' ?
            [...localCharacters].reverse().concat(characters)
              .filter(char => search === '' || new RegExp(`${search}`, 'gi').test(char.name))
              .map(char =>
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
              ) : <Loading title={'Loading characters'} size={50}/>
        }
      </ul>
      <GoToTop visible={hasVerticalScroll} action={() => ref.current.scrollTo({ top: 0, behavior: 'smooth' })}/>
    </section>
  );
}

export default Home;