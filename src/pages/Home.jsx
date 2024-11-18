import { useContext, useEffect, useRef, useState } from 'react';
import Character from '../components/Character';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import { charactersCtx } from '../components/CharactersContext';
import Loading from '../components/Loading';
import useDocumentScroll from '../hooks/useDocumentScroll';
import GoToTop from '../components/GoToTop';

const Home = () => {

  const { characters, localCharacters, loadState, reloadCharacters, deleteCharacter } = useContext(charactersCtx);
  const [search, setSearch] = useState('')
  const isScrolled = useDocumentScroll()

  return (
    <section className='relative'>
      <Navigation />
      <SearchBar search={search} setSearch={setSearch} />
      <ul >
        {
          loadState === 'idle' ?
            localCharacters.concat(characters)
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
      <GoToTop visible={isScrolled}/>
    </section>
  );
}

export default Home;