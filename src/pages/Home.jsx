import { useContext, useEffect, useState } from 'react';
import Character from '../components/Character';
import Navigation from '../components/Navigation';
import useCharacteres from '../services/useCharacters';
import SearchBar from '../components/SearchBar';
import { charactersCtx } from '../components/CharactersContext';

const Home = () => {

  const { characters, localCharacters, loadState, reloadCharacters, deleteCharacter } = useContext(charactersCtx);
  const [search, setSearch] = useState('')

  return (
    <section>
      <Navigation />
      <SearchBar search={search} setSearch={setSearch} />
      <ul>
        {
          loadState === 'idle' && Array.isArray(characters) ?
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
              ) : null
        }
      </ul>
    </section>
  );
}

export default Home;